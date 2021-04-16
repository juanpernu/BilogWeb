import './index.module.scss';

const List = ({title, content}) =>{
  return(
      <div className="list">
        <h3 className="list-title">{title}</h3>
        <ul className="list-container">
          {content.map((el, index)=>{
            const {text} = el 
            return(
              <li key={index}>{text}</li>
            )
          })}
        </ul>
      </div>
    ) 
}

export default List;