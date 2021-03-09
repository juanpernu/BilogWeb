import React,{useState} from 'react';
const Accordion = ({text, children, onClick}) =>{
    const [estado, setEstado] = useState(false);
    return (
        <div className="submenu">
          <span className={`${estado ? 'submenu-title__open' : 'submenu-title__close'}`}  onClick={() => setEstado(!estado)}>{text} <span className="icon-arrow--down" /></span>
          <div className={`${estado ? 'submenu-container__open' : 'submenu-container__close'}`}>
            {children.map(child => {
              const {title, hash} = child;
              return <span className="submenu-item" onClick={() => onClick(hash)}>{title}</span>
            })}
          </div>
          <style jsx>
          {`
          {/* STYLES FOR MOBILE */}
            @media only screen and (max-width: 750px) {
              .submenu{
                padding:0;
                margin:0;
                box-sizing: border-box;
                width:60%;
                margin-left:0.7rem;
                padding-bottom: 7px;
                color:#000;
              }
              .submenu-title__open{
                font-weight:600;
                display:flex;
                justify-content:space-between;
              }
              .icon-arrow--down {
                content: url('/static/bilog-arrow-down.svg');
                display: inline-block;
                width: 10px;
                height: 10px;
                margin:5px;
              }
              .submenu-title__open .icon-arrow--down {
                transform: rotate(180deg);
                width: 10px;
                height: 10px;
                margin:5px;
              }
              .submenu-title__close{
                display:flex;
                justify-content:space-between;
              }
              .submenu-container__open{
                color:#000;
                width:60%;
                padding-left:25px;
              }
              .submenu-container__close{
                display:none;
              }
              .submenu-item {
                text-decoration:none;
                color: #666;
                display: block;
                margin: 8px 0;
                font-size:16px;
              }
            }
            {/* STYLES FOR DESKTOP */}
            @media only screen and (min-width: 751px) {
              .submenu{
                font-size: 14px;
                text-decoration: none;
                box-sizing: border-box;
                color: #666;
              }
              .submenu-title__open{
                height:20px;
                width:65%;
                cursor:pointer;
                display:flex;
                flex-direction:row;
                justify-content: flex-start;
                font-weight:600;
              }
              .icon-arrow--down {
                content: url('/static/bilog-arrow-down.svg');
                display: inline-block;
                width: 10px;
                height: 10px;
                margin: 5px 0 5px 20px;
              }
              .submenu-title__open .icon-arrow--down {
                transform: rotate(180deg);
                width: 10px;
                height: 10px;
                margin: 5px 0 5px 20px;
              }
              .submenu-title__close{
                width:65%;
                cursor:pointer;
                display:flex;
                flex-direction:row;
                justify-content: flex-start;
              }
              .submenu-title__close:hover{
                color:#000;
              }
              .submenu-container__open{
                color:#000;
                width:65%;
                padding: 0px;
              }
              .submenu-container__close{
                display:none;
              }
              .submenu-item {
                text-decoration:none;
                color: #666;
                display: block;
                padding: 0;
                margin: 5px 15px;
              }
              .submenu-item:hover{
                color: #000;
                cursor:pointer;
              }
            }
          `}
          </style>
        </div>
      )
}
export default Accordion;