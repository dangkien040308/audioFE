import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowTrendUp} from "@fortawesome/free-solid-svg-icons"
import './noteItem.css'

export default function AskItem({des}) {
    return (
        <div className="bottom_ask-item">
          <span>{des}</span>
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </div>
    )
}