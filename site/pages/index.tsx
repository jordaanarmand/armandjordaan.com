import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-sky-400 px-4">
        <h1>Hello World!</h1>
        <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
          Hello World!s
        </button>
      </div>
      <div
        className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
        style={{ width: "500px", height: "500px" }}
      >
        FOO BAR
      </div>
    </div>
  );
};

export default Home;
