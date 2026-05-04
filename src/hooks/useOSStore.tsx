import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useHostEnv } from '@/compat';

type ThemeMode = 'light' | 'dark';
type OSState = { theme: { mode: ThemeMode } };
type NotificationInput = {
  appId?: string;
  appName?: string;
  appIcon?: string;
  title: string;
  message?: string;
  isRead?: boolean;
};
type OSAction =
  | { type: 'OPEN_OR_FOCUS_WINDOW'; appId: string; args?: unknown }
  | { type: 'ADD_DESKTOP_ICON'; icon: { name: string; icon: string; fileSystemNodeId?: string; position?: unknown } }
  | { type: string; [key: string]: unknown };

const fallbackState: OSState = { theme: { mode: 'dark' } };
const OSContext = createContext<{ state: OSState; dispatch: (action: OSAction) => void } | null>(null);

export function useOS() {
  const ctx = useContext(OSContext);
  const { host } = useHostEnv();
  return useMemo(() => {
    if (ctx) return ctx;
    return {
      state: fallbackState,
      dispatch: (action: OSAction) => {
        if (action.type === 'OPEN_OR_FOCUS_WINDOW' && typeof action.appId === 'string') {
          host.windows.openOrFocus(action.appId, action.args as never);
        }
        if (action.type === 'ADD_DESKTOP_ICON') {
          const icon = (action as { icon: { name: string; icon: string } }).icon;
          host.windows.addDesktopIcon?.({
            label: icon.name,
            iconUrl: icon.icon,
            onClick: () => undefined,
          });
        }
      },
    };
  }, [ctx, host]);
}

export function useNotifications() {
  const { host } = useHostEnv();
  return {
    addNotification: (n: NotificationInput) => host.notifications.notify({
      appId: n.appId,
      title: n.title,
      body: n.message,
      level: 'info',
      unread: n.isRead === false ? false : true,
    }),
  };
}

export function OSProvider({ children }: { children: ReactNode }) {
  return <OSContext.Provider value={{ state: fallbackState, dispatch: () => undefined }}>{children}</OSContext.Provider>;
}
