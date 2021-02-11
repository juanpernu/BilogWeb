import React, {useState} from 'react';
import SidebarSection from './SidebarSection';
import SidebarContent from '../../contents/documentation/sidebar';



const SidebarMobile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const changeState = ()=>{
      setIsSidebarOpen(!isSidebarOpen)
    }
    return(
  <div className={`container ${isSidebarOpen ? "open-container" : ""}`}>
    <section className="section-buttom">
      <button className={`btn-menu ${isSidebarOpen ? "open-buttom" : ""}`} onClick={changeState} type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"/></svg>
      </button>
    </section>

    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      {
        SidebarContent.map((content, key) => (
          <div className="category" key={key}>
            <h2 className="label">{content.title}</h2>
            <div className="posts">
              {content.docs.map((docText, key) => {
                const { title, hash } = docText;
                return <SidebarSection key={key} text={title} hash={hash} />
              })}
            </div>
          </div>
        ))
      }
      </aside>
    <style jsx>
      {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .section-buttom{
          padding: 5px 10px 0;
          margin:0;
          opacity:0.50;
        }

        .btn-menu{
          border-radius:50%;
          width:40px;
          height:40px;
          text-decoration:none;
          outline:none;
          border-style:none;
          transition: all 1.5s;
        }

        .open-buttom{
          transform: translateX(15rem) rotate(-180deg);
        }

        .sidebar{
          transform: translateX(-300px);
          height:auto;
          width:17rem;
          background-color:gray;
          transition: all 1.5s;
          position:absolute;
          z-index:1;
        }

        .open{
          transform: translateX(0rem);
          height: auto; 
          padding:0;
          margin:0;
          box-sizing:border-box;
          color:#000;
        }

        .category{
          color:#000;
          width:300px;
          text-decoration:none;
          transition: all 3s;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .section-buttom{
          display:none;
        }

        .sidebar {
          display:none;
        }
      }
      `}
    </style>
  </div>
)}

export default SidebarMobile;
