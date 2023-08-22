import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ productos }) => {
 
    const renderedProductos = productos.map((producto) => {
        return (
           
                <div className="col-sm-4">
                    <ProductCard    id={producto.id} 
                                    titulo={producto.title}
                                    descripcion={producto.description} 
                                    precio={producto.price} 
                                    img={producto.image}
                                    stock={producto.stock}
                                    discount={producto.discount} />
                </div>
            
        )
           
    })


    // Presento todos los productos renderizados x ProductCard en la pantalla
    return (
            <div className="container p-5">
                <div className="row">
                    { renderedProductos }
                </div>
            </div>    
    )


}

export default ProductList;