import React, { useState } from "react";
import { Footer, Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";
import { ProfileNavbar } from "./ProfileNavbar";
import styles from "./UserProfile.module.css";
import { UserProfileAddresses } from "./UserProfileAddresses";
import { UserProfileOrders } from "./UserProfileOrders";
import { UserProfileSettings } from "./UserProfileSettings";

export function UserProfile() {
  const [profileSection, setProfileSection] = useState("profile");
  const {
    userDetails: { userDetails },
    logoutUser,
  } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <>
      <Navbar />
      <main className="pos-rel min-h-95 flex-center">
        <div className={styles.profile__box}>
          <ProfileNavbar
            profileSection={profileSection}
            setProfileSection={setProfileSection}
          />
          <div className={styles.profile__content}>
            {profileSection === "profile" && (
              <UserProfileSettings
                handleLogout={handleLogout}
                userDetails={userDetails}
              />
            )}
            {profileSection === "orders" && <UserProfileOrders />}
            {profileSection === "addresses" && <UserProfileAddresses />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
