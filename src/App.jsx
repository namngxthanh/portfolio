import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/Featurecards";
import Experience from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <Experience />
            <TechStack />
            <Testimonials />
            <Contact />
        </>
    );
};

export default App;
