import Form  from "./Form";
import DesignandSkill from "./DesignandSkill";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import LatestService from "./LatestService";
import EduandExp from "./EduandExp";



function MainPage() {
    return (
        <>
            <Hero />
            <AboutMe />
            <DesignandSkill/>
            <LatestService />
            <EduandExp />
            <Form />
        </>
    );
}

export default MainPage;