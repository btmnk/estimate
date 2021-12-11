import React from "react";
import { HorizontalOrientation, Popover } from "@klarheit/popover";

import { ContextMenuItemData } from "./interface/ContextMenuItemData";
import { ContextMenuItem } from "./ContextMenuItem/ContextMenuItem";

import styles from "./ContextMenu.css";

export interface ContextMenuProps {
  isOpen: boolean;
  anchorRef: React.RefObject<HTMLElement>;
  menuItems: ContextMenuItemData[];
  onOutsideClick: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = (props) => {
  const { isOpen, anchorRef, menuItems, onOutsideClick } = props;

  return (
    <Popover
      isOpen={isOpen}
      anchorRef={anchorRef}
      horizontalOrientation={HorizontalOrientation.RIGHT}
      onOutsideClick={onOutsideClick}
    >
      <div className={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <ContextMenuItem key={`contextMenuItem_${index}`} item={item} />
        ))}
      </div>
    </Popover>
  );
};

export { ContextMenu };
