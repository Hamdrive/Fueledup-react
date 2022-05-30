import React from "react";
import styles from "./UserProfile.module.css";

export function ProfileNavbar({ profileSection, setProfileSection }) {
  return (
    <nav className={styles.profile__nav}>
      <ul className="w-100 flex-row">
        <li
          onClick={() => setProfileSection("settings")}
          className={`list-style-none flex-1 ${styles.profile__section} ${
            profileSection === "settings" && styles.active
          }`}>
          <div className="fas fa-user-cog pointer"></div>
        </li>
        <li
          onClick={() => setProfileSection("orders")}
          className={`list-style-none flex-1 ${styles.profile__section} ${
            profileSection === "orders" && styles.active
          }`}>
          <div className="fas fa-box-open pointer"></div>
        </li>
        <li
          onClick={() => setProfileSection("addresses")}
          className={`list-style-none flex-1 ${styles.profile__section} ${
            profileSection === "addresses" && styles.active
          }`}>
          <div className="fas fa-address-book pointer"></div>
        </li>
      </ul>
    </nav>
  );
}
