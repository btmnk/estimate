import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useRef, useState } from "react";

import { useUsername } from "../../../store/Global/selectors/useUsername";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import { ContextMenuItemData } from "../ContextMenu/interface/ContextMenuItemData";

import styles from "./Profile.css";

export interface ProfileProps {
  className?: string;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const { className } = props;

  const username = useUsername();

  const anchorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const menuItems: ContextMenuItemData[] = [{ label: "Change username", onClick: () => console.log("click!") }];

  const containerClassNames = classNames(styles.container, className);

  return (
    <>
      <div ref={anchorRef} onClick={openMenu} className={containerClassNames}>
        <div>{username ?? "Guest"}</div>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>

      <ContextMenu isOpen={isOpen} menuItems={menuItems} anchorRef={anchorRef} onOutsideClick={handleOutsideClick} />
    </>
  );
};

export { Profile };
