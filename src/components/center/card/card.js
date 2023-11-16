import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Model from "./model"
import './card.css'

export default function Card({img, author, name, stars, des}) {
  var starsArr = []
  const [isOpen , setIsOpen] = useState(false)

  for (let i = 0 ; i < stars ; i++) {
       starsArr.push(<FontAwesomeIcon icon={faStar} />)
  }
    return (
      <>
        <div className="card_item" onClick={() =>  setIsOpen(true)}>
             <img src={img} alt="wait" className="image" />
           <div className="card_item-name">{name}</div>
           <div className="card_item-author">{author}</div>
           <div className="card_item-stars">
             {starsArr}
           </div>
        </div>
        <Model isOpen={isOpen} img={img} author={author} name={name} setIsNotOpen={() => setIsOpen(false)} des={des} />
        </>
    )
}
