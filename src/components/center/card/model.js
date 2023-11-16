import './card.css'

export default function Model({isOpen, img, author, name, setIsNotOpen,des}) {
    if (!isOpen) return null
    return (
      <div className='overlay' onClick={setIsNotOpen}>
       <div className='card-model' onClick={(e) => { e.stopPropagation() }}>
          <img src={img} alt='wait' />
          <div className='card_model-content'>
            <div className='model_name'>{name}</div>
            <div className='model_author'>Director : {author}</div>
            <div className='model_des'>{des}</div>
            <button className='model_close' onClick={setIsNotOpen}>X</button>
          </div>
         
       </div>        
       </div>
    )
}