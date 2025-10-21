

const Task = () => {

    // PRODUCT CARD
    function ProductCard({ name, price, image, description }) {
        return (
            <div className="product-card">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
            </div>
        )
    }

    // PRODUCT LIST

    const ProductList = [
        { name: "iPhone", price: "$999", image: "/images/Iphone.jpeg", description: "Apple phone" },
        { name: "Air Jordan", price: "$250", image: "/images/jordans.jpeg", description: "Sneakers" },
        { name: "Snickers", price: "$2", image: "/images/Snickers.jpeg", description: "Chocolate" },
    ];

    //MAIN RETURN
    return (
        <>
            <header>
                <h1>My Favorite Products Page</h1>
            </header>


            <div className='Products'>
                {ProductList.map((product) => {
                    return <ProductCard
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                })}
            </div>
            <footer>
                <p>© {new Date().getFullYear()} sandro</p>
            </footer>

        </>

    )
}

export default Task
