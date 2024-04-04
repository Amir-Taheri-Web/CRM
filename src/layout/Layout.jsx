import styles from "@/styles/Layout.module.css";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link href="/">Next CRM</Link>
        </h1>

        <Link href="/add-customer">Add Customer</Link>
      </header>

      <main className={styles.main}>
        {children}
        <Toaster />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Amir-Taheri-Web"
          target="_blank"
          rel="noreferrer"
        >
          Developed by Amir Taheri❤️
        </a>
      </footer>
    </>
  );
};

export default Layout;
