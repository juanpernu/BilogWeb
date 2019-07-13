import React, { Fragment } from 'react';
import SidebarSection from './SidebarSection';
import SidebarContent from '../..//documentation/sidebar';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(){
    const { isOpen } = this.state;
    return(
      <aside className="sidebar">
        <div className={`category level-1 ${isOpen && 'open'}`} onClick={() => this.openMenu()}>
          {
            SidebarContent.map((content) => (
              <Fragment>
                <a className="label">{content.title}</a>
                <div className="posts">
                  {content.docs.map(docText => (<SidebarSection text={docText} />))}
                </div>
              </Fragment>
            ))
          }
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .sidebar,
            .docs-section {
              height: 300px;
            }
            .category {
              margin: 18px 0;
            }
            .open > .label {
              color: #000;
              margin-top: 30px;
            }
            .open > .label:first-child {
              margin-top: 0;
            }
            .open > .posts {
              margin-top: 18px;
              height: auto;
            }
            .label {
              font-size: 14px;
              font-weight: 400;
              cursor: pointer;
              display: flex;
              align-items: center;
              color: #666;
            }
            .posts {
              border-left: 1px solid #eaeaea;
              margin-left: 3.5px;
              margin-top: 0;
              height: 0;
              overflow: hidden;
              padding-left: 21px;
            }
          }
        `}
        </style>
      </aside>
    )
  }
}

export default Sidebar;
