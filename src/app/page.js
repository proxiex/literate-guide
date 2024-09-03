import WhyChooseUs from "@/component/aboutUs/whyChooseUs";
import AboutUs from "@/component/home/aboutUs";
import FAQ from "@/component/home/FAQ";
import ImageGrid from "@/component/home/imageGrid";
import OurServices from "@/component/home/ourServices";
import ServiceOffer from "@/component/home/serviceOffer";
import TypeOfTransport from "@/component/home/slider";
import HomeTop from "@/component/home/top";
import TransportNetwork from "@/component/home/transportNetwork";
import Layout from "@/component/layout/layout";
import Reviews from "@/component/services/reviews";
import TrustCompany from "@/component/trustCompany/trustCompany";


export default function Home() {
  return (
    <main className="min-h-screen w-full top-bg">
      <Layout>
    
        <HomeTop data={top} />
        <TrustCompany />
        <AboutUs />
        <ServiceOffer/>
        <TypeOfTransport /> 
        <ImageGrid/>
        <TransportNetwork/>
        <OurServices/>
        <WhyChooseUs/>
        
        <Reviews/>
        <FAQ/>
      </Layout>
    </main>
  );
}

const top = {
  title: "Lorem ipsum dolor sit amet consectetur.",
  description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  image: "https://via.placeholder.com/400x500" 
}