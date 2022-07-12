import { SigInButton } from "../SigInButton";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";

export const Header = () => {
  const { asPath } = useRouter();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width="110" height="31" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SigInButton />
      </div>
    </header>
  );
};
