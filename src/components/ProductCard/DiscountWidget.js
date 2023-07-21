const DiscountWidget = ( {discount} ) => {

    if (discount > 0) {
        return (

            <div>
                <span className="badge text-bg-danger" style={{fontSize: 16}}>-{discount}%</span>
            </div>
    
        )
    }

} 

export default DiscountWidget;