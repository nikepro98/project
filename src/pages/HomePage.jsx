import ProductList from "../components/ProductList"

function HomePage() {
    return(
        <section className="mobile-block">
            <div className="mobile-block__header">
                Catalog
            </div>
            <ProductList />
        </section>
    );
}

export default HomePage;
