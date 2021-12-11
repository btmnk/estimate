import classNames from "classnames";
import React from "react";

import { ContextMenuItemData } from "../interface/ContextMenuItemData";

import styles from "./ContextMenuItem.css";

export interface ContextMenuItemProps {
  item: ContextMenuItemData;
}

const ContextMenuItem: React.FC<ContextMenuItemProps> = (props) => {
  if (typeof props.item === "string") {
    return <div className={styles.divider} />;
  }

  const { label, disabled, href, onClick, icon } = props.item;

  const containerClassNames = classNames(styles.itemContainer, disabled && styles.disabled);

  const WrapperComponent: React.FC = href
    ? ({ children }) => (
        <a className={containerClassNames} href={href} onClick={onClick}>
          {children}
        </a>
      )
    : ({ children }) => (
        <div className={containerClassNames} onClick={onClick}>
          {children}
        </div>
      );

  return (
    <WrapperComponent>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.label}>{label}</div>
    </WrapperComponent>
  );
};

export { ContextMenuItem };
