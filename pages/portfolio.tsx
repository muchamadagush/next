/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Modal from "./modal";

const Home: NextPage = () => {
  const data = 'https://api.lorem.space/image/shoes?w=400&h=225'
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-tranparent">
        <div className={`flex-1 ${styles.container}`}>
          <Link href="/">
            <a className="normal-case cursor-pointer text-3xl font-bold text-white">
              Agus
            </a>
          </Link>
          <div className="flex-none ml-auto">
            <ul className="p-0">
              <Link href="/portfolio">
                <a className="text-white text-xl cursor-pointer">Portfolio</a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      {/* End Navbar */}
      <div className={styles.container}>
        <main className={styles.main}>
          <ul className="flex flex-wrap gap-3 py-5 justify-center">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <label htmlFor="my-modal-3" className="btn btn-primary btn-sm">Read More</label>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <label htmlFor="my-modal-3" className="btn btn-primary btn-sm">Read More</label>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <label htmlFor="my-modal-3" className="btn btn-primary btn-sm">Read More</label>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <label htmlFor="my-modal-3" className="btn btn-primary btn-sm">Read More</label>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <label htmlFor="my-modal-3" className="btn btn-primary btn-sm">Read More</label>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <label htmlFor="my-modal-3" className="btn btn-primary btn-sm">Read More</label>
                </div>
              </div>
            </div>
          </ul>
        </main>
      </div>

      <Modal data={data} />
    </>
  );
};

export default Home;
