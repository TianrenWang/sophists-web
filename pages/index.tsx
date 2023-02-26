import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
    heap.load("272847599");
   `,
          }}
        />
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
