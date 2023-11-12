import Button from '../buttonComponent/button'
import img from '../../img/audible.png'
import './nav.css'

export default function Nav() {
  return (
      <div className="nav">
         <div className="nav_icon">
           <img src={img} alt="wait" />
         </div>
         <div className="nav_main">
           <span>Best Seller</span>
           <span>Package</span>
           <span>Download</span>
           <span>Free Trial</span>
         </div>
         <div className="nav_btn">
             <Button content="Sign In" type="normal" />
             <Button content="Start Free Trial" type="bigOrange" />
         </div>
      </div>
  )
}