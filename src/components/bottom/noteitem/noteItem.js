import './noteItem.css'

export default function NoteItem({icon, title, des}) {
    return (
        <div className="noteItem">
              <div className="noteItem_icon">{icon}</div> <br />
              <div className="noteItem_title">{title}</div>
              <div className="noteItem_des">{des}</div>
        </div>
    )
}