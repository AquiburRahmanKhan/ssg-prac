import React from "react";
import styles from "./header.module.css";

const Header = ({ navigation }) => {
  return (
    <header
      id="nav-menu"
      className={styles.navMenu}
      aria-label="navigation bar"
    >
      <div className={styles.containerNav}>
        <div className={styles.navStart}>
          <a className={styles.monstarLabLogo} href="/">
            <img
              src="img/monstar_lab_logo.png"
              width="120"
              alt="monstarlab-logo"
            />
          </a>
          <nav className={styles.menu}>
            <ul className={styles.menuBar}>
              {navigation.map((item) =>
                item.fields.dropdown ? (
                  <li key={item.sys.id}>
                    <div className={styles.dropdownContainer}>
                      <a className={styles.navLink}>{item.fields.linkTitle}</a>
                      <div className={styles.dropdownContent}>
                        <ul>
                          {item.fields.childMenu.map((childItem) => (
                            <li key={childItem.sys.id}>
                              <a
                                className={styles.navLink}
                                href={childItem.fields.link}
                              >
                                {childItem.fields.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.sys.id}>
                    <a className={styles.navLink} href={item.fields.hrefValue}>
                      {item.fields.linkTitle}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
