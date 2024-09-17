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
        {/* <OurServices/> */}
        {/* <WhyChooseUs/> */}
        
        {/* <Reviews/> */}
        {/* <FAQ/> */}
      </Layout>
    </main>
  );
}

const top = {
  title: "Global Event Hostesses & Modelling Agency",
  description: "Global Event Hostesses & Modelling Agency provides professional models and hostesses for events, fashion shows, and brand campaigns worldwide.",
  image: "https://via.placeholder.com/400x500" 
}