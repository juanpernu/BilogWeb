import React from 'react';
import Link from 'next/link';

class Mobile extends React.Component {
  constructor(){
    super();
    this.state = {
      showMenu: false,
    };
    this.showMenuHandler = this.showMenuHandler.bind(this);
  }

  showMenuHandler(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    if(!this.state.showMenu){
      this.setState({
        showMenu: true,
      });
    } else {
      this.setState({
        showMenu: false,
      });
    }
  }

  render(){
    return(
      <nav className="menu">
        <Link href="/">
          <img className="logo" src="/static/logo-bilog.png" alt="Bilog" />
        </Link>
        <div
          className={`menu--wraper ${this.state.showMenu == false ? '' : 'expanded'}`}
          onClick={this.showMenuHandler}
        >
          <div className="line top"></div>
          <div className="line bottom"></div>
        </div>
        <aside
          className={`menu--mobile ${this.state.showMenu == false ? 'closed' : 'open'}`}
        >
          <Link href="/">
            <a className="link">Home</a>
          </Link>
          <div className="link">
            <p className="title">Versiones</p>
            <Link href="/odontologica">
              <a className="sublink">Gestión odontológica</a>
            </Link>
            <Link href="/laboratorio">
              <a className="sublink">Laboratorios dentales</a>
            </Link>
            <Link href="/auditoria">
              <a className="sublink">Auditoría odontológica</a>
            </Link>
          </div>
          <Link href="/about">
            <a className="link">Nosotros</a>
          </Link>
          <Link href="/contact">
            <a className="link">Contacto</a>
          </Link>
          <div className="link">
            <p className="title">Descargas</p>
            <Link href="/download-go">
              <a className="sublink">Gestión odontológica</a>
            </Link>
            <Link href="/download-lab">
              <a className="sublink">Laboratorios dentales</a>
            </Link>
            <Link href="/utils">
              <a className="sublink">Descargas útiles</a>
            </Link>
          </div>
        </aside>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .menu {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-direction: row;
              width: 100%;
            }
            .logo {
              height: 35px;
              width: auto;
              margin-right: 30px;
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
            .link.special {
              color: #0076ff;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .menu {
              display: none;
            }
          }
        `}
        </style>
      </nav>
    )
  }
};

export default Mobile;