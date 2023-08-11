const CartPurcharseSummary = ({ itemQuantity, itemTotal, shippingTotal }) => {

    return (
        <div className="card shadow-sm border border-light-subtle">
            <div className="card-header fw-bold fs-6 bg-white">
                Resumen de compra
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <p className="card-title text-start">Productos ({ itemQuantity })</p>
                    </div>
                    <div className="col">
                        <p className="text-end fw-medium">${ itemTotal }</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="card-text text-start">Envios</p>
                    </div>
                    <div className="col">
                        <p className="text-end fw-medium">${ shippingTotal }</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6 className="card-text text-start fs-5">Total</h6>
                    </div>
                    <div className="col">
                        <h6 className="card-text text-end fs-6">${ (itemTotal + shippingTotal) }</h6>
                    </div>
                </div>

                <a href="#" className="btn btn-primary w-100 mt-3">Finalizar compra</a>
            </div>
        </div>
    )
}

export default CartPurcharseSummary;