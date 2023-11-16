import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons"
import {faMicrophone} from "@fortawesome/free-solid-svg-icons"
import {faBell , } from "@fortawesome/free-regular-svg-icons"
const noteItem = [
    {
      icon : <FontAwesomeIcon icon={faSoundcloud} /> ,
      title : 'Credit for members trials' ,
      des : '1 credit (2 credits for prime members, good for any premium selection tiles you like-yours to keep. Terms apply'
    },
    {
      icon : <FontAwesomeIcon icon={faMicrophone} /> ,
      title : 'Audible catalog podcast' ,
      des : 'The audible plus catalog of podcast, audiobooks, giuded, wellness, and Audible Originals. Listen all you want, no credit needed'
    },
    {
      icon : <FontAwesomeIcon icon={faBell} /> ,
      title : 'Friendly Email Reminders' ,
      des : 'You will get friendly email reminders before your trial ends, to unlock another benefit for your daily does of listening '
    }
]

export default noteItem