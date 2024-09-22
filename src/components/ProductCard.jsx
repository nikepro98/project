import { Link } from "react-router-dom";

function ProductCard(props) {
    return(
        <Link to="/detail" class="product-card">
            <div class="container">
                <h3 class="product-card__title">{props.title}</h3>
                <span class="product-card__price">{props.price}</span>
                <span class="product-card__category">{props.category}</span>
            </div>
        </Link>
    );
}

export default ProductCard;
