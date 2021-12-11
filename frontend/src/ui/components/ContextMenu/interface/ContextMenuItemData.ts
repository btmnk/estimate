export type ContextMenuItemData =
  | {
      label: string;
      onClick?: () => void;
      href?: string;
      disabled?: boolean;
      icon?: JSX.Element;
    }
  | "divider";
