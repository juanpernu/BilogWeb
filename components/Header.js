import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      showMenu: false,
    };
    this.showMenuHandler = this.showMenuHandler.bind(this);
  }

  showMenuHandler(ev) {
    ev.preventDefault();
    if(this.state.showMenu == false){
      return this.setState({
        showMenu: true,
      });
    }
    this.setState({
      showMenu: false,
    });
  }

  render() {
    return(
      <header className="header">
        <div>
          {/* Fixear el logo, está más grande de lo requerido 
          <img src="/static/logo.svg" alt="Bilog" /> */}
        </div>
        <nav className="menu" onClick={this.showMenuHandler}>
          <div className={`menu--wraper ${this.state.showMenu == false ? '' : 'expanded'}`}>
            <div className="line top"></div>
            <div className="line bottom"></div>
          </div>
          <div className="menu--desktop">
            <Link href="/">
              <a className="link">Home</a>
            </Link>
            <Link href="/versions">
              <a className="link">Versiones</a>
            </Link>
            <Link href="/about">
              <a className="link">Nosotros</a>
            </Link>
            <Link href="/contact">
              <a className="link">Contacto</a>
            </Link>
          </div>
        </nav>
        <aside className={`menu--mobile ${this.state.showMenu == false ? 'closed' : 'open'}`}>
          <Link href="/">
            <a className="link">Home</a>
          </Link>
          <Link href="/versions">
            <a className="link">Versiones</a>
          </Link>
          <Link href="/about">
            <a className="link">Nosotros</a>
          </Link>
          <Link href="/contact">
            <a className="link">Contacto</a>
          </Link>
        </aside>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .header {
              align-items: center;
              border-bottom: 1px solid rgb(234, 234, 234);
              display: flex;
              flex-direction: row;
              height: 45px;
              justify-content: space-between;
              padding: 20px;
            }
            .menu--wraper {
              align-items: center;
              display: flex;
              flex-direction: column;
              height: 100%;
              justify-content: center;
              width: 100%;
            }
            .menu--wraper.expanded .line:first-child {
              transform: translateY(1px) rotate(45deg);
            }
            .menu--wraper.expanded .line:last-child {
              transform: translateY(0px) rotate(-45deg);
            }
            .line {
              background-color: rgb(0, 0, 0);
              height: 1px;
              transition: transform 0.15s ease 0s;
              width: 22px;
            }
            .line:first-child {
              transform: translateY(-4px) rotate(0deg);
            }
            .line:last-child {
              transform: translateY(4px) rotate(0deg);
            }
            .menu--desktop,
            .menu--mobile.closed {
              display: none;
            }
            .menu--mobile.open {
              background-color: #fff;
              left: 0;
              padding: 0;
              position: absolute;
              top: 85px;
              width: 100%;
            }
            .menu--mobile.open .link {
              border-bottom: 1px solid rgb(234, 234, 234);
              color: rgb(0, 0, 0);
              display: block;
              font-size: 14px;
              padding: 16px 20px;
              text-decoration: none;
              text-transform: uppercase;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .navigation-bar {
              
            }
            .menu--mobile {
              display: none;
            }
            .link {
              margin-right: 15px;
            }
          }
        `}
        </style>
      </header>
    )
  }
}

export default Header
