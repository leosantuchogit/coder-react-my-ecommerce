
import { useState } from "react";

const FavoriteWidget = () => {

    const [bookmark, setBookmark] = useState(false);  

    return (
        <div>

            {/* Inline llamo el handle del envento click donde seteo el distinto del estado actual, true o false */}
            <a className="link-body-emphasis link" onClick={()=>(setBookmark(!bookmark)) } >

                {
                    bookmark ? (
                        <i className="bi bi-heart-fill" style={{fontSize: 24, color: 'red', cursor:'pointer'}}></i>
                    ) : (
                        <i className="bi bi-heart" style={{fontSize: 24, cursor:'pointer'}}></i>
                    )
                }

               
            </a>
        </div>
    )

}

export default FavoriteWidget;