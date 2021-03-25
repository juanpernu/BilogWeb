import React, {useState} from 'react';
import SidebarSection from '../SidebarSection';

const blockScroll = (byClassName, byTagName) => {
  const [a] = document.getElementsByClassName(byClassName);
  const [b] = document.getElementsByTagName(byTagName);
  [a, b].forEach(el => {
    if(el.style.overflow) {
      el.removeAttribute("style");
    } else {
      el.style.overflow = 'hidden';  
    }
  });
};

const SidebarMobile = ({ content }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onClickHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    blockScroll('layout', 'body');
  };

  return(
  <div className={`container ${isSidebarOpen ? "open" : ""}`}>
    <section className="section-button">
      <button className="btn-menu" onClick={onClickHandler} type="button">
        <p>Documentación</p>
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
      </button>
    </section>

    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      {
        content.map((item, key) => (
          <div className="category" key={key}>
            <h2>Documentación</h2>
            <p className="label">{item.title}</p>
            <div className="posts">
              {item.sections.map((section, key) => {
                const { title, hash, childrens = [] } = section;
                return <SidebarSection key={key} text={title} hash={hash} children={childrens} onClickHandler={onClickHandler} />
              })}
            </div>
          </div>
        ))
      }
    </aside>
    <div className="grey-bg" onClick={onClickHandler} />
    <style jsx>
      {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .section-button {
          margin: 0;
        }

        .btn-menu {
          display: flex;
          align-items: center;
          outline:none;
          border-style:none;
          width: 100%;
          text-align: left;
          padding: 5px 12px;
        }
        
        .btn-menu .icon {
          width: 12px;
          margin-left: 10px;
        }

        .sidebar {
          transform: translateX(-400px);
          transition: transform .5s;
          height: 100vh;
          padding: 0;
          margin: 0;
          color: #000;
          position: absolute;
          z-index: 1000;
          width: 80%;
          background-color: #fff;
          top: 0;
          box-sizing: border-box;
          overflow: hidden;
        }

        .sidebar.open {
          transform: translateX(0rem);
        }

        .container.open .grey-bg {
          width: 100%;
          height: 100vh;
          background-color: rgba(0,0,0, .5);
          position: absolute;
          top: 0;
          z-index: 999;
        }

        .category {
          color: #000;
          padding: 20px;
          text-decoration: none;
          font-size: 16px;
        }

        .category h2 {
          font-size: 24px;
          font-weight: 200;
        }

        .category .label {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 8px;
          padding: 0;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .container {
          display:none;
        }
      }
      `}
    </style>
  </div>
)}

export default SidebarMobile;
