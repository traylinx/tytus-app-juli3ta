type FileSystemNode = {
  id: string;
  name: string;
  type: 'file' | 'folder';
  parentId: string | null;
  content?: string;
  mimeType?: string;
  refTrackId?: string;
  createdAt: number;
  modifiedAt: number;
};

type FileSystemState = { nodes: Record<string, FileSystemNode> };

const KEY = 'juli3ta_standalone_vfs_v1';
const generateId = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

const makeFolder = (name: string, parentId: string | null): FileSystemNode => ({
  id: generateId(), name, type: 'folder', parentId, createdAt: Date.now(), modifiedAt: Date.now(),
});

const defaultFS = (): FileSystemState => {
  const root = makeFolder('/', null);
  const home = makeFolder('home', root.id);
  const user = makeFolder('user', home.id);
  const desktop = makeFolder('Desktop', user.id);
  const music = makeFolder('Music', user.id);
  const documents = makeFolder('Documents', user.id);
  return { nodes: Object.fromEntries([root, home, user, desktop, music, documents].map((n) => [n.id, n])) };
};

const load = (): FileSystemState => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as FileSystemState;
  } catch { /* ignore */ }
  const fs = defaultFS();
  save(fs);
  return fs;
};

const save = (fs: FileSystemState) => {
  try { localStorage.setItem(KEY, JSON.stringify(fs)); } catch { /* ignore */ }
};

const titleCase = (name: string) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

export const getIconForFileName = (filename: string): string => {
  const lower = filename.toLowerCase();
  if (lower.endsWith('.lyrics.txt')) return 'NotebookText';
  if (lower.endsWith('.mp3') || lower.endsWith('.wav') || lower.endsWith('.m4a')) return 'FileAudio';
  if (lower.endsWith('.json')) return 'FileJson';
  if (lower.endsWith('.txt') || lower.endsWith('.md')) return 'FileText';
  return 'File';
};

export function useFileSystem() {
  const api = {
    ensureUserFolder(name: string): string {
      const fs = load();
      const folderName = titleCase(name);
      let folder = Object.values(fs.nodes).find((n) => n.type === 'folder' && n.name === folderName);
      if (!folder) {
        const user = Object.values(fs.nodes).find((n) => n.type === 'folder' && n.name === 'user');
        folder = makeFolder(folderName, user?.id ?? null);
        fs.nodes[folder.id] = folder;
        save(fs);
      }
      return folder.id;
    },
    findChildByName(parentId: string, name: string): FileSystemNode | undefined {
      const fs = load();
      return Object.values(fs.nodes).find((n) => n.parentId === parentId && n.name === name);
    },
    createFile(parentId: string, name: string, content = '', opts: { mimeType?: string; refTrackId?: string } = {}): string {
      const fs = load();
      const node: FileSystemNode = { id: generateId(), name, type: 'file', parentId, content, mimeType: opts.mimeType, refTrackId: opts.refTrackId, createdAt: Date.now(), modifiedAt: Date.now() };
      fs.nodes[node.id] = node;
      save(fs);
      return node.id;
    },
    writeFile(id: string, content: string): void {
      const fs = load();
      if (fs.nodes[id]) {
        fs.nodes[id].content = content;
        fs.nodes[id].modifiedAt = Date.now();
        save(fs);
      }
    },
  };
  return api;
}
