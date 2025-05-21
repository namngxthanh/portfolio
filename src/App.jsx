import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/Featurecards";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
        </>
    );
};

export default App;
