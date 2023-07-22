const DiscountWidget = ( {discount} ) => {

    if (discount > 0) {
        return (
            <span className="badge text-bg-danger" style={{fontSize: 16}}>-{discount}%</span>
        )
    }

} 

export default DiscountWidget;