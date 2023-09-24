import { CategoriesComponent } from "../../components/categories";
import { HeaderComponent } from "../../components/header";
import { AboutHome } from "../../components/sections/aboutHome";
import { MainHome } from "../../components/sections/mainHome";
import { ProductsSection } from "../../components/sections/products";

export const HomePage = () => {
    return(
        <>
            <HeaderComponent />
            <MainHome />
            <CategoriesComponent />
            <ProductsSection />
        </>
    )
}