import classNames from "classnames"
import './button.css'
// Four types : normal ,bigOrange ,smallOrange ,borderGrey
export default function Button({type ,content}) {
    if(type === "normal" || type === "bigOrange")
     return (
      <div className={classNames('button_custom1',`${type}`)}>
           {content}
      </div>
     )
    if (type === "smallOrange") 
     return (
        <div className={classNames('button_custom2')}>
         {content}
        </div>     
     )
    if (type === "borderGrey") 
     return (
        <div className={classNames('button_custom3')}>
         {content}
        </div>     
     )
} 