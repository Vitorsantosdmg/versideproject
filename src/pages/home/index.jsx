import { CategoriesComponent } from "../../components/categories";
import { HeaderComponent } from "../../components/header";
import { Collections } from "../../components/sections/collections";
import { Footer } from "../../components/sections/footer";
import { MainHome } from "../../components/sections/mainHome";
import { ProductsSection } from "../../components/sections/productsSection";

export const HomePage = () => {
    return(
        <>
            <HeaderComponent />
            <MainHome />
            {/* <Collections /> */}
            <Footer />
        </>
    )
}