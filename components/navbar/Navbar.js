import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = (props) => {
  const { userName } = props;
  const router = useRouter();

  const [showDropDown, setShowDropDown] = useState(false);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleDropDown = (e) => {
    e.preventDefault();
    setShowDropDown(!showDropDown);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix-navbar-logo.png"
              width={128}
              height={34}
              alt="Netflix logo"
            />
          </div>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleDropDown}>
              <p className={styles.username}>{userName}</p>
              <Image
                src="static/expand.svg"
                width={24}
                height={24}
                alt="Expand dropdown"
              />
            </button>

            {showDropDown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login" className={styles.linkName}>
                    Sign out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
