import { Header } from "../../components/header"
import { Main } from "../../components/main"
import { BannerHome } from "../../components/banner"
import './home.scss'

export const HomePage = () => {
    return(
        <>
            <div className="home">
                <Header />
                <BannerHome />
                <Main />
            </div>
        </>
    )
}