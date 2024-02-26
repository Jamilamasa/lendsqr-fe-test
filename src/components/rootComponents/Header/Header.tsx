import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/images/logo.svg";
import { Button, Input } from "../../forms/FormInput";
import { IoSearch } from "react-icons/io5";
import { LiaBellSolid } from "react-icons/lia";
import { MdArrowDropDown } from "react-icons/md";
import { IconContext } from "react-icons";
import avatar from "../../../assets/images/avatar.png";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      {/* Logo */}

      <img src={logo} alt="Logo" className={styles["header-logo"]} />

      {/* Search Bar */}
      <div className={styles["header-searchBar"]}>
        <Input
          type="text"
          placeholder="Search for anything"
          id="search"
          className={styles["header-searchBar-input"]}
        />
        <Button type="submit" className={styles["header-searchBar-submit"]}>
          <IoSearch />
        </Button>
      </div>
      {/* Links */}
      <div className={styles["header-links"]}>
        <a href="https://jamilamasa.netlify.app" target="_blank">
          Docs
        </a>
        <IconContext.Provider
          value={{ className: styles["header-links-icon"] }}
        >
          <LiaBellSolid />
        </IconContext.Provider>
        <div className={styles["header-links-user"]}>
          <img src={avatar} alt="avatar" />
          <p>Adedeji</p>
        </div>
        <IconContext.Provider
          value={{ className: styles["header-links-icon"] }}
        >
          <MdArrowDropDown />
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default Header;
