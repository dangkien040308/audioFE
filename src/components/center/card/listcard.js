import { useState } from "react"
import data from "../../data/data.js"
import Card from "./card.js"
import './listCard.css'



export default function ListCard() {
    const [currentPage , setCurrentPage] = useState(1)
    const itemPerPage = 8
    const lastPos = currentPage * 8
    const firstPos = lastPos - itemPerPage 

    const newData = data.slice(firstPos,lastPos)
    var pages = []
    for (let i = 1 ; i <= Math.ceil(data.length/itemPerPage) ; i++){
        pages.push(i)
    }

    return (
        <div>

         <div className="listCard">
           { newData.map( (item,key) => {
             console.log(key)
             return <Card img={item.img} author={item.author} name={item.name} stars={item.stars} key={key} des={item.des} />
           }
             )
         }
         </div>
         
         <div className="pagination">
             {pages.map( (item,key) => (
                <div key={key} className = {item === currentPage ? "pagination_item-active" : "pagination_item"} onClick={() => setCurrentPage(item)}>
                    {item}
                </div>
             ))}
         </div>
   
                    
        </div>
    )
}