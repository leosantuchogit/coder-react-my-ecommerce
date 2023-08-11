import { useState } from "react"

function Acordeon ({items}) {

    const [ expandedIndex, setExpandedIndex] = useState(0)


    const renderItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex

        const icon = <span>
            { isExpanded ? <i className="bi bi-caret-left-fill"></i> : <i className="bi bi-arrow-right-square-fill"></i> }
        </span>
   
        return (
            <div className="flex justify-between p-3 bg-gray-50 border-b items.cneter cursor-pointer" key={item.id}>
                <div onClick={()=>setExpandedIndex(index)}>
                    {icon}
                    {item.label}
                </div>
                
                {isExpanded && <div className="border-b p-5" >{item.content}</div>}

            </div>
        )
    
    })

    return <div>{renderItems}</div>

  
}

export default Acordeon