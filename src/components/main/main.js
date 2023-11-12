import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import img1 from "../../img/1.png"
import img2 from "../../img/2.png"
import img3 from "../../img/3.png"
import img4 from "../../img/4.png"

export default function Main() {
    return (
      <div className="main">
         <div className="main_left">
           <div className="main_left-title">
               <span>Be transported by</span>
               <span>extraordinary stories</span>
           </div>
           <div className="main_left-content">
             there is no one better to listening excelent stories with Audible, you can find your favorite audio here
           </div>
           <div className="main_left-input">
               <input type="text" placeholder="Audiobooks, Podcast, Original" />
               <FontAwesomeIcon icon={faMagnifyingGlass} />
           </div>
         </div>
         <div className="main_right">
            
         </div>
      </div> 
      )
}