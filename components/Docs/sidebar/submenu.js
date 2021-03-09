const SubMenu = ({ text, children, onClick }) => {
  return (
    <div className="submenu">
      <p className="submenu-text">{text}</p>
      {children.map(child => {
        const {title, hash} = child;
        return <span className="submenu-item" onClick={() => onClick(hash)}>{title}</span>
      })}
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .submenu {
            padding: 0 0 1px 12px;
            margin: 0 0 8px;
          }
          .submenu-text {
            margin: 0 0 8px;
            padding: 0;
          }
          .submenu-text:before {
            content: ''; 
            display: inline-block;
            border-radius: 50%;
            width: 3px;
            height: 3px;
            background-color: #000;
            position: relative;
            bottom: 5px;
            margin-right: 10px;
          }
          .submenu-item {
            margin: 0 0 8px;
            color:#555;
            text-decoration:none;
            display: block;
            padding-left: 20px;
          }
          .submenu-item:before {
            content: '>';
            font-size: 12px;
            position: relative;
            bottom: 2px;
            margin-right: 5px;
          }
        } 

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .submenu {
            font-size: 14px;
            text-decoration: none;
            box-sizing: border-box;
            color: #666;
          }
          .submenu-text:hover {
            cursor: default;
          }
          .submenu-item {
            text-decoration: none;
            color: #666;
            margin-left: 5px;
            display: block;
            padding: 0;
            margin: 8px 0;
          }
          .submenu-item:hover {
            cursor: pointer;
            color: #000;
          }
          .submenu-item:before {
            content: '';
            background-color: #444;
            display: inline-block;
            border-radius: 50%;
            position: relative;
            bottom: 2px;
            margin-right: 10px;
            width: 4px;
            height: 4px;
          }
        }
      `}
      </style>
    </div>
  )
}

export default SubMenu;
