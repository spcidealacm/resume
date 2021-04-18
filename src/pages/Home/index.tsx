import Style from "./style.module.scss";
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className={Style.home}>
            <Link to="/example">Example</Link>
            Here is the home page
        </div>
    )
}

export default Home;