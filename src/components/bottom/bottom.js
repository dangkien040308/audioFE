import noteItem from './noteitem/noteItemData.js'
import NoteItem from './noteitem/noteItem.js'
import ask from './noteitem/frequentlyask.js'
import AskItem from './noteitem/askitem.js'
import './bottom.css'


export default function Bottom() {
    return (
        <div className="bottom">
           <div className="bottom_container">
           <div className="bottom_title">What you get with trial</div>
           <div className="bottom_title-small">your 30 days trial comes with</div>
           <div className="bottom_card-wrap">
             {noteItem.map( (item,key) => (
                <NoteItem key={key} icon={item.icon} title={item.title} des={item.des} />
             ))}
           </div>
           <div className="bottom_ask">
              <div className="bottom_title2">Frequently asked question</div>
               {ask.map( (item,key) => (
                  <AskItem des={item} key={key} />
               ))}
           </div>
           <div className="bottom_footer">
              <div className="bottom_footer-item"> <span>Privacy Notice</span></div>
              <div className="bottom_footer-item"> <span>About Audible</span></div>
              <div className="bottom_footer-item"><span>Careers</span></div>
              <div className="bottom_footer-item"><span>Conditions of Use</span></div>
              <div className="bottom_footer-item"><span>Cookies</span></div>
           </div>
           <div className="bottom_footer-wrap">
                <div className="bottom_footer-item2">Your Ads Privacy Choices</div>
                <div className="bottom_footer-item2">United State(EngLish)</div>
              </div>
           <div className="page_author">©Coppyright 1999 - 2008 The Audible. All Right Reserved</div>
           </div>
        </div>
    )
}