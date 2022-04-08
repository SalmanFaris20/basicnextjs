import React from "react";
import Link from "next/link";
import styles from "./../components/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.list}>
        <ul className={styles.gap}>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
          <Link href={"/blog"}>
            <a>Blog</a>
          </Link>
          <Link href={"/profile"}>
            <a>Profile</a>
          </Link>
        </ul>
      </header>
    </>
  );
}
