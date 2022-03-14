import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import AboutUsSection from "../components/AboutUsSection";
import WorkSection from "../components/WorkSection";

export default function Home() {
  return (
    <>
      <Header />
      <LandingSection id='home' color='gray.900' />
      <AboutUsSection id='about-us' color='gray.900' />
      <WorkSection id='work' color='gray.900' />
    </>
  );
}
