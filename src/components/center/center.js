import './center.css'
import Button from '../buttonComponent/button.js'
import ListCard from './card/listcard.js'

export default function Center() {
    return (
        <div className="center">
            <div className="center_wrap">
            <div className="center_container">
                <div className="center_item1">Recommendation for you</div>
                <div className="center_item2">Here is what people like, we hope you like it too</div>
                <div className="center_btn">
                   <div className="center_btn-big">
                      <Button type="smallOrange" content="New Release"  />
                      <Button type="borderGrey" content="Best Sellers" />
                      <Button type="smallOrange" content="Featured" />
                      <Button type="borderGrey" content="Membership" />
                   </div>
                   <div className="center_btn-small">
                      <Button type="borderGrey" content="Podcast" />
                      <Button type="smallOrange" content="Originals" />
                      <Button type="borderGrey" content="Award Winners" />
                   </div>
                </div>
            </div>
            <div className="center_listcard">
               <ListCard />
            </div>
            </div>
        </div>
    )
}