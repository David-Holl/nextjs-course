import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Artikeluebersicht</title>
      </Head>
      <h1>Artikeluebersicht</h1>
      {["1", "2", "3", "4", "5", "6"].map((path) => (
        <div key={path}>
          <Image
            src={`/pictures/${path}.jpg`}
            alt="article"
            width={800}
            height={600}
          />
        </div>
      ))}
    </div>
  );
}
