import Nav from "./section/nav";
import Hero from "./section/hero";
import { Manrope } from "@next/font/google";
import Departemen from "./section/departemen";
import Visi from "./section/visi";
import Tentang from "./section/tentang";
import Footer from "./section/footer";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div
      className={`bg-gradient-to-b from-[#E8E7DF] to-[#E1E7DF] ${manrope.className}`}
    >
      <Nav />
      <Hero />
      <Departemen />
      <Visi />
      <Tentang />
      <div className="container mx-auto flex items-center justify-center mb-20">
        <button className=" w-[351px] h-[72px] bg-[#C23E56] rounded-lg py-2 px-6 md:py-3 md:px-8 text-white my-2 font-semibold">
          <a href="https://wa.me/6285600088322">Gabung Sekarang</a>
        </button>
      </div>
      <Footer />
    </div>
  );
}
