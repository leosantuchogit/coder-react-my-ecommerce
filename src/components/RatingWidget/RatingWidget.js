const RatingWidget = () => {
    
    const star = [{
        id: 1, 
        marked: false,
        className: "bi bi-star",
    }, {
        id: 2, 
        marked: false,
        className: "bi bi-star",  
    }, {
        id: 3, 
        marked: false,
        className: "bi bi-star",  
    }, {
        id: 4, 
        marked: false,
        className: "bi bi-star",  
    }, {
        id: 5, 
        marked: false,
        className: "bi bi-star",  
    }]

    const listStar = star.map(item => 
        <ul style={{listStyleType: 'none'}}>
            <li style={{float: 'left'}}>
                <a className="link-body-emphasis ps-1" style={{display: 'inline-block', textDecoration: 'none'}} >
                    <i id={item.id} className={item.className} style={{ fontSize: 16 }}></i>
                </a>
            </li>
        </ul>

    )

    return (
        
        <div>
            {listStar} 
        </div>
        
    )
}

export default RatingWidget;