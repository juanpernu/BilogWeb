import React from 'react';
import Link from 'next/link';

class Desktop extends React.Component {
  constructor(){
    super();
    this.state = {
      showSoftwares: false,
      showDownloads: false,
    };
    this.showMenuHandler = this.showMenuHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  showMenuHandler(ev) {
    ev.preventDefault();
    ev.target.innerText == "DESCARGAS" && this.setState({ showDownloads: !this.state.showDownloads });
    ev.target.innerText == "SISTEMAS" && this.setState({ showSoftwares: !this.state.showSoftwares });
  }

  mouseLeaveHandler() {
    this.state.showDownloads && this.setState({ showDownloads: !this.state.showDownloads });
    this.state.showSoftwares && this.setState({ showSoftwares: !this.state.showSoftwares });
  }
  
  render(){
    return(
      <nav className="menu">
        <Link href="/">
          <img className="logo" src="/static/logo-bilog.svg" alt="Bilog" />
        </Link>
        <div className="menu--wraper">
          <div className="line top"></div>
          <div className="line bottom"></div>
        </div>
        <aside className="menu--desktop">
          <Link href="/">
            <a className="link">Home</a>
          </Link>
          <div className="link" onClick={this.showMenuHandler}>
            <p className="title">
            Sistemas</p><i className="icon-arrow--down" />
            <div
              className={`link--dropdown ${this.state.showSoftwares == false ? '' : 'is-active'}`}
              onMouseLeave={this.mouseLeaveHandler}
            >
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
          </div>
          <Link href="/about">
            <a className="link">Nosotros</a>
          </Link>
          <Link href="/contact">
            <a className="link">Contacto</a>
          </Link>
          <Link href="/utils">
            <a className="link">Útiles</a>
          </Link>
        </aside>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .menu {
              display: none;
              align-items: center;
              justify-content: space-between;
              flex-direction: row;
              width: 100%;
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
              color: #777;
              text-transform: uppercase;
              text-decoration: none;
              transition: 0.3s ease;
            }
            .link:hover {
              color: #0090ff;
              cursor: pointer;
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
            .link.special {
              color: #0076ff;
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
      </nav>
    )
  }
}

export default Desktop;