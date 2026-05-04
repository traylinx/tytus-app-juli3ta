export type ShellMenuActionId =
  | 'open-help'
  | 'minimize-window'
  | 'close-window'
  | string;

export interface ShellMenuItem {
  id: string;
  label: string;
  actionId?: ShellMenuActionId;
  disabled?: boolean;
  danger?: boolean;
  onSelect?: () => void;
}

export interface ShellMenuGroup {
  id: string;
  label: string;
  items: ShellMenuItem[];
}

export interface ShellMenuModel {
  appLabel: string;
  groups: ShellMenuGroup[];
}
