import data from "@/scraper/dogDetails.json";
import Header from "@/components/layout/header";
import Body from "@/components/layout/Body/body";
import Footer from "@/components/layout/Footer/footer";
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

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
