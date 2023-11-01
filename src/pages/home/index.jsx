import { Header } from "../../components/header"
import { Main } from "../../components/main"
import { BannerHome } from "../../components/banner"
import './home.scss'
import { ProductSection } from "../../components/productsSection"
import { Footer } from "../../components/footer"

export const HomePage = () => {
    return(
        <>
            <div className="home">
                <Header />
                <div className="home__items">
                    <BannerHome />
                    <Main />
                    <ProductSection />
                    <Footer />
                </div>
            </div>
        </>
    )
}