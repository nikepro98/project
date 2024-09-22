import ProductCard from "./ProductCard";

function ProductList() {

    const products = [
        {
            id: 1,
            title: "iPhone 15",
            price: "Price: 999$",
            category: "Category: phones",
        },
        {
            id: 2,
            title: "iPhone 15",
            price: "Price: 999$",
            category: "Category: phones",
        },
        {
            id: 3,
            title: "iPhone 15",
            price: "Price: 999$",
            category: "Category: phones",
        },
        {
            id: 4,
            title: "iPhone 15",
            price: "Price: 999$",
            category: "Category: phones",
        },
        {
            id: 5,
            title: "iPhone 15",
            price: "Price: 999$",
            category: "Category: phones",
        },
        {
            id: 6,
            title: "iPhone 15",
            price: "Price: 999$",
            category: "Category: phones",
        },
        {
            id: 7,
            title: "iPhone 15",
            price: "Price: 999$",
            category: "Category: phones",
        },
        {
            id: 8,
            title: "iPhone 15",
            price: "Price: 999$",
            category: "Category: phones",
        },
    ]

    return(
        <div className="products-block">
            {products.map((product, index) => (
                <ProductCard 
                    key={index}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                />
            ))}
        </div>
    );
}

export default ProductList;
