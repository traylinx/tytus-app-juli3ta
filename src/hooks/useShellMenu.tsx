import { useEffect } from 'react';
import { useHostEnv } from '@/compat';
import type { ShellMenuModel } from '@/lib/shellMenu';

export const useRegisteredShellMenu = (_windowId: string | null | undefined): ShellMenuModel | null => null;
export const useShellMenuActions = () => null;

export const useShellMenuRegistration = (
  _windowId: string | null | undefined,
  model: ShellMenuModel | null | undefined,
) => {
  const { host } = useHostEnv();
  useEffect(() => {
    if (!model || !host.shellMenu?.register) return undefined;
    return host.shellMenu.register({
      appId: host.appId,
      groups: model.groups.map((group) => ({
        label: group.label,
        items: group.items.map((item) => ({
          id: item.id,
          label: item.label,
          disabled: item.disabled,
          onClick: item.onSelect,
        })),
      })),
    });
  }, [host, model]);
};

export function ShellMenuProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
