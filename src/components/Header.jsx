import menuIcon from "../assets/images/menu.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="header">
            <div class="container">
                <Link to="/categories" class="menu">
                    <img src={menuIcon} alt="menu" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
