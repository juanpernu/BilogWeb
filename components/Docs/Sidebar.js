import React, { Fragment } from 'react';
import SidebarSection from './SidebarSection';
import SidebarContent from '../../contents/documentation/sidebar';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="category">
      {
        SidebarContent.map((content, key) => (
          <Fragment key={key}>
            <h2 className="label">{content.title}</h2>
            <div className="posts">
              {content.docs.map((docText, key) => {
                const { title, hash } = docText;
                return <SidebarSection key={key} text={title} hash={hash} />
              })}
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
        .label {
          color: #000;
          margin-top: 30px;
        }
        .label:first-child {
          margin-top: 0;
        }
        .posts {
          margin-top: 18px;
          height: auto;
          border-left: 1px solid #eee;
        }
        .label {
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          color: #666;
        }
        .label > .posts {
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

export default Sidebar;

/* .sidebar{
          margin:0;
          padding: 0 16px;
        } */
        /* .label{
          font-size: 3.1rem;
          letter-spacing:0.09rem;
          line-height: 4rem;
        } */
        /*.nav-link a {
          text-decoration: none;
          font-size:1.2rem;
          font-weight:300;
          color: #222;
          box-sizing: border-box;
        }*/