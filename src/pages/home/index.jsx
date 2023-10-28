import { Header } from "../../components/header"
import { Main } from "../../components/main"
import './home.scss'

export const HomePage = () => {
    return(
        <>
            <div className="home">
                <Header />
                <Main />
            </div>
        </>
    )
}