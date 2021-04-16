import styled from './index.module.scss';
const List = ({title, content}) =>{
  return(
      <div className={styled["list"]}>
        <h3 className={styled["list-title"]}>{title}</h3>
        <ul className={styled["list-container"]}>
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