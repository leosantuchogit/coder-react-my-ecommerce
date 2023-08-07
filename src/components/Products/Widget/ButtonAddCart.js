const ButtonAddCart = ( {stock} ) => {

    const handleOnClick = () => {
        alert("Se agregó un producto al carrito.")
    }

    return (
        <button type="button" onClick={handleOnClick} className="btn btn-primary w-100" disabled={!stock}>Agregar al carrito</button>
    )
}

export default ButtonAddCart;