import React from "react";
import { Footer, Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";
import styles from "./UserProfile.module.css";

export function UserProfile() {
  const {
    userDetails: { userDetails },
    logoutUser
  } = useAuth();
  console.log(userDetails);

    const handleLogout = (e) => {
      e.preventDefault();
      logoutUser();
    };

  return (
    <>
      <Navbar />
      <main className="pos-rel min-h-95 flex-center">
        <div className={styles.profile__box}>
          <nav className={styles.profile__nav}>
            <ul className="w-100 flex-row">
              <li className="list-style-none flex-center flex-1 ">
                <div className="fas fa-user-cog pointer"></div>
              </li>
              <li className="list-style-none flex-center flex-1 ">
                <div className="fas fa-box-open pointer"></div>
              </li>
              <li className="list-style-none flex-center flex-1 ">
                <div className="fas fa-address-book pointer"></div>
              </li>
            </ul>
          </nav>
          <div className="px-md my-1">
            <div className="txt-wrap">
              <h3 className="py-sm">Profile Details</h3>
              <div className="flex-between py-sm">
                <p className="h4">Username</p>
                <p className="h4 txt-wrap">{`${userDetails.firstName}${userDetails.lastName}`}</p>
              </div>
              <div className="flex-between py-sm">
                <p className="h4">Email</p>
                <p className="h4">{userDetails.email}</p>
              </div>
            </div>
            <button
              onClick={(e) => handleLogout(e)}
              className="btn btn-md btn-cta txt-semibold h4 px-md my-1">
              Logout
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
