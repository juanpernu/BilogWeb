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
        <nav className="menu" onClick={this.showMenuHandler}>
          <Link href="/">
            <img className="logo" src="/static/logo-bilog.png" alt="Bilog" />
          </Link>
          <div className={`menu--wraper ${this.state.showMenu == false ? '' : 'expanded'}`}>
            <div className="line top"></div>
            <div className="line bottom"></div>
          </div>
          <aside className="menu--desktop">
            <Link href="/">
              <a className="link">Home</a>
            </Link>
            <div className="link" onMouseLeave={this.showMenuHandler}>
              <p className="title" onMouseEnter={this.showMenuHandler}>
              Versiones</p><i className="icon-arrow--down" />
              <div className={`link--dropdown ${this.state.showMenu == false ? '' : 'is-active'}`}>
                <Link href="/odontologica">
                <a className="sublink">Gestión Odontológica</a>
                </Link>
                <Link href="/auditoria">
                <a className="sublink">Auditoría Odontológica</a>
                </Link>
              </div>
            </div>
            <Link href="/about">
              <a className="link">Nosotros</a>
            </Link>
            <Link href="/contact">
              <a className="link">Contacto</a>
            </Link>
          </aside>
        </nav>
        <aside className={`menu--mobile ${this.state.showMenu == false ? 'closed' : 'open'}`}>
          <Link href="/">
            <a className="link">Home</a>
          </Link>
          <div className="link">
            <p className="title">Versiones</p>
            <Link href="/odontologica">
            <a className="sublink">Gestión Odontológica</a>
            </Link>
            <Link href="/auditoria">
            <a className="sublink">Auditoría Odontológica</a>
            </Link>
          </div>
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
              border-bottom: 1px solid rgb(234, 234, 234);
              display: flex;
              height: 45px;
              padding: 20px;
              letter-spacing: 0.2px;
            }
            .logo {
              height: 35px;
              width: auto;
              margin-right: 30px;
            }
            .menu {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-direction: row;
              width: 100%;
            }
            .menu--wraper {
              align-items: center;
              display: flex;
              flex-direction: column;
              height: 45px;
              justify-content: center;
              width: 45px;
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
              z-index: 200;
              top: 85px;
              width: 100%;
              box-shadow: 0 10px 20px rgba(0,0,0,0.16);
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
            .menu--mobile.open .link .title {
              margin: 0;
              padding: 0;
            }
            .sublink {
              margin-top: 10px;
              text-decoration: none;
              display: block;
              color: rgb(153, 153, 153);
              font-size: 14px;
              line-height: 16px;
              white-space: nowrap;
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
            }
            .logo {
              height: 45px;
              width: auto;
              margin: 0 30px 0 20px;
            }
            .logo:hover {
              cursor: pointer;
            }
            .menu {
              width: 1040px;
              margin: 0 auto;
              display: flex;
              flex-direction: row;
            }
            .menu--mobile {
              display: none;
            }
            .menu--desktop {
              display: flex;
              flex-direction: row;
              max-width: 100%;
              padding: 0 20px;
              position: relative;
              align-items: center;
            }
            .link {
              margin-right: 15px;
              border: 0;
              font-size: 14px;
              padding: 10px;
              color: #999;
              text-transform: uppercase;
              text-decoration: none;
              transition: 0.3s ease;
            }
            .link:hover {
              color: #0090ff;
            }
            .link--dropdown {
              opacity: 0;
              display: none;
              padding: 8px 0;
              position: absolute;
              background-color: #fff;
              box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 32px 0px;
              border-radius: 5px;
              transition: opacity 0.2s ease 0s;
            }
            .link--dropdown.is-active {
              opacity: 1;
              display: block;
            }
            .link--dropdown .sublink {
              padding: 10px 20px;
              text-decoration: none;
              display: block;
              color: rgb(153, 153, 153);
              font-size: 14px;
              line-height: 16px;
              white-space: nowrap;
              text-transform: uppercase;
            }
            .link--dropdown .sublink:hover {
              color: #0090ff;
            }
            .link .title,
            .link .title {
              cursor: pointer;
            }
            .title {
              display: inline-block;
            }
            .icon-arrow--down {
              content: url('/static/bilog-arrow-down.svg');
              margin-left: 10px;
              display: inline-block;
              width: 10px;
              height: auto;
            }
          }
        `}
        </style>
      </header>
    )
  }
}

export default Header
