import Image from "next/image";
import data from "@/scraper/dogDetails.json";
import Header from "@/components/layout/header";
import Body from "@/components/layout/Body/body";
export default function Home() {
  const x = data;
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Body data={x} />
      </main>
    </div>
  );
}
