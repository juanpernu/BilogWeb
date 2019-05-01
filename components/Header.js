import MenuDesktop from './Menu/Desktop';
import MenuMobile from './Menu/Mobile';

const Header = () => (
  <header className="header">
    <MenuDesktop />
    <MenuMobile />
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
        .header {
          border-bottom: 1px solid rgb(234, 234, 234);
          display: flex;
          height: 45px;
          padding: 20px;
          letter-spacing: 0.2px;
        }
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .header {
          border-bottom: 1px solid rgb(234, 234, 234);
          height: 45px;
          padding: 20px;
          letter-spacing: 0.2px;
          display: flex;
          position: fixed;
          width: 100%;
          background: #fff;
          z-index: 900;
          box-shadow: 0 5px 10px rgba(0,0,0,0.12);
        }
      }
    `}
    </style>
  </header>
);

export default Header
