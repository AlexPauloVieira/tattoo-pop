import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import AboutUsSection from "../components/AboutUsSection";

export default function Home() {
  return (
    <>
      <Header />
      <LandingSection id='home' color='gray.900' />
      <AboutUsSection id='about-us' color='gray.900' />
      <AboutUsSection id='testimonials' color='gray.500' />
    </>
  );
}
