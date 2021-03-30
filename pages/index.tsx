import Head from "next/head";
import ChooseGame from "../components/chooseGame";
import Board from "../components/board";
import styles from "../styles/Home.module.css";

import store from "./index/model";

export default function Home() {
  const chooseGame = (game) => {
    store.addGameNextList(game);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Choose a game</h1>

        <ChooseGame onChoose={chooseGame} />

        <Board lists={store.lists} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
