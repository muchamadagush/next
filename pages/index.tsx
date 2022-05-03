import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-tranparent">
        <div className={`flex-1 ${styles.container}`}>
          <a className="normal-case cursor-pointer text-3xl font-bold text-white">Agus</a>
        </div>
      </div>
      <hr />
      {/* End Navbar */}
      <div className={styles.container}>
        <main className={styles.main}>
          <div className="flex flex-row pt-36">
              <h1 className="text-white text-4xl ml-10"> Hi, I&apos;m<span className="text-7xl"><br/>Muchamad<br/>Agus Hermawan</span></h1>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
