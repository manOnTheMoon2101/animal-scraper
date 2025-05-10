import Image from "next/image";
import data from "@/scraper/dogDetails.json";
export default function Home() {
  const x = data;
  return (
    <div>
      {x.map((x: any) => (
        <Image
          key={x.image}
          className="dark:invert"
          src={x.image}
          alt="Not Available"
          width={180}
          height={38}
          priority
        />
      ))}
    </div>
  );
}
