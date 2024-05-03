import FAQ from "@/components/FAQ";
import Images from "@/components/Images";
import Main from "@/components/Main";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Main />
      <WhyUs />
      <Images />
      <Products />
      <FAQ />
      <Footer />
    </div>
  );
}
