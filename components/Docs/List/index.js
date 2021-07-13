import styled from './index.module.scss';

const List = ({ title, content }) => {
  return (
    <div className={styled["list"]}>
      <h3 className={styled["list-title"]}>{title}</h3>
      <ul className={styled["list-container"]}>
        {content.map((el, index) => {
          const { text, link, hasLink } = el
          return (
            hasLink ?
              <li key={index}>
                <a className={styled["link"]} href={link}>
                  {text}
                </a>
              </li>
              :
              <>
                <li key={index}>
                  {text}
                </li>
              </>
          )
        })}
      </ul>
    </div>
  )
}

export default List;
