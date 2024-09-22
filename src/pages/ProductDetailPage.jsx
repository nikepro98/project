import iphone from "../assets/images/phone.jpg";
import { Link } from "react-router-dom";

function ProductDetailPage() {
    return(
        <section className="mobile-block">
            <div className="mobile-block__header">
            <img src={iphone} alt="iPhone 15" className="phone" />
            <div className="container">
                <div className="product-detail-block">
                    <p className="description">
                    The iPhone 15 model features a more powerful processor and a refined case. Some of the highlights include a 48 MP main camera, a Type-C connector, and a display with Dynamic Island. The iPhone 15 case is made of a durable and lightweight alloy, giving it a sophisticated look and a sense of reliability.
                    </p>
                    <button className="buy">Add to cart</button>
                    <Link to="/" className="back">Back</Link>
                </div>
            </div>
            </div>
        </section>
    );
}

export default ProductDetailPage;
