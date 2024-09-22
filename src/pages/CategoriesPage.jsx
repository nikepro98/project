import phone from "../assets/images/phone.jpg";
import laptop from "../assets/images/laptop.jpg";
import console from "../assets/images/ps5.jpg";
import pc from "../assets/images/pc.jpg";
import micro from "../assets/images/micro.jpg";
import tv from "../assets/images/tv.jpg";
import { Link } from "react-router-dom";

function CategoriesPage() {
    return(
        <section className="mobile-block">
            <div className="mobile-block__header">Categories</div>
            <div className="container">
                <div className="category-row">
                    <Link to="/categories/phones" className="category-item">
                        <img src={phone} alt="Phone" className="category-item__img" />
                        <span className="category-item__title">Phones</span>
                    </Link>
                    <div className="category-item">
                        <img src={laptop} alt="Laptop" className="category-item__img" />
                        <span className="category-item__title">Laptops</span>
                    </div>
                    <div className="category-item">
                        <img src={console} alt="Console" className="category-item__img" />
                        <span className="category-item__title">Consoles</span>
                    </div>
                    <div className="category-item">
                        <img src={pc} alt="PC" className="category-item__img" />
                        <span className="category-item__title">PC</span>
                    </div>
                    <div className="category-item">
                        <img src={micro} alt="Micro" className="category-item__img" />
                        <span className="category-item__title">Periphery</span>
                    </div>
                    <div className="category-item">
                        <img src={tv} alt="TV" className="category-item__img" />
                        <span className="category-item__title">TV</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoriesPage;
