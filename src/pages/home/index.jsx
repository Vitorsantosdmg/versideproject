import { HeaderComponent } from "../../components/header";
import { AboutHome } from "../../components/sections/aboutHome";
import { MainHome } from "../../components/sections/mainHome";

export const HomePage = () => {
    return(
        <>
            <HeaderComponent />
            <MainHome />
            <AboutHome />
        </>
    )
}