import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../src/styles/utils.module.css";

const name = "Akihisa";
export const siteTitle = "next.js blog";

function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link href="/favicon.ico" />
      </Head>
      <header className="styles.header">
        <img src="/public/images/profile.png" className={utilsStyles.borderCircle}/>
        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;