import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Heap from "../components/Heap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sophists</title>
        <meta
          name="description"
          content="Share your text conversations like never before!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Heap />
      </Head>
      <main className={styles.main}>
        <Image
          src="/icon.png"
          alt="Sophists"
          width={200}
          height={200}
          priority
        />
        <h1 className={inter.className} style={{ marginTop: 20 }}>
          Sophists
        </h1>
        <p className={inter.className} style={{ marginTop: 20 }}>
          Share your text conversations easier and build a following
        </p>
        <p className={inter.className} style={{ marginTop: 20 }}>
          <u>
            <a
              className={styles.link}
              href="https://apps.apple.com/ca/app/sophists/id1605861486"
            >
              iOS
            </a>
          </u>{" "}
          .{" "}
          <u>
            <a
              className={styles.link}
              href="https://play.google.com/store/apps/details?id=com.sophists.sophists"
            >
              Android
            </a>
          </u>
        </p>
      </main>
    </>
  );
}
