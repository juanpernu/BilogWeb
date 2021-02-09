import React, {useState} from 'react';
import Sidebar from './Sidebar';
 
const Menumobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const despliegue = ()=>{
      setIsSidebarOpen(!isSidebarOpen)
      console.log(`Cambios en el estado. Ahora esta en ${isSidebarOpen}`)
    }

  return (

    <React.Fragment>
      {/*<aside
        onClick={() => setIsSidebarOpen(false)}
        className={`menu--mobile ${isSidebarOpen ? "elblock" : "hidden"}`}
      />*/}
      <div className="contenedor-icon">
        <button
          className="btn-menu"
          onClick={despliegue}
          type="button"
        >
          <p>F</p>
        </button>
      </div>

      <div className={`menu--mobile ${isSidebarOpen ? "block" : "hidden"}`}>
        <Sidebar/>
      </div>
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .btn-menu{
            background-color:red;
          }

          .menu--mobile{
            background-color:grey;
            color:white;
            text-decoration:none;
          }

          .block{
            background-color:rgba(0,0,0,0.9);
            overflow:scroll;
            transform:translate(0px);
            max-width:305px;
            padding:0;
            margin:0;
            box-sizing:border-box;
            transition-duration: 500ms;
            transition-delay: 500ms;
            transition-timing-function: ease;
          }
          .hidden{
            background-color:coral;
            transform:translate(50px);
          }

        }
        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
           .contenedor-icon{
            display:none;
            border:1px solid blue;
          }
        }
      `}
      </style>
    </React.Fragment>
  );
};
export default Menumobile;