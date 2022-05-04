import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-tranparent">
        <div className={`flex-1 ${styles.container}`}>
          <a className="normal-case cursor-pointer text-3xl font-bold text-white">
            Agus
          </a>
          <div className="flex-none ml-auto">
            <ul className="p-0">
              <li>
                <a href="/portfolio" className="text-white text-xl cursor-pointer">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      {/* End Navbar */}
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl sm:ml-5 md:ml-5 lg:ml-10 pt-40 lg:pt-36">
            Hi, I&apos;m
            <span className="text-5xl lg:text-7xl">
              <br />
              Muchamad
              <br />
              Agus Hermawan
            </span>
          </h1>
        </main>
      </div>
    </>
  );
};

export default Home;
