import React, { useContext } from 'react';

import { DocsContext } from '../../contexts/docContext';

const SidebarSection = ({text, link}) => {
  const { allContent } = useContext(DocsContext);

  const handleOnClick = (link) => {
    const regexp = new RegExp(/\#(.*)/gm)
    const contentId = link.match(regexp);
    allContent(contentId);
  };

  return (
    <div className="link">
      <div className="nav-link">
        <a onClick={() => handleOnClick(link)} href={link}>{text}</a>
      </div>
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .link {
            margin: 0 0 10px 15px;
          }
          .link:last-child {
            margin-bottom: 0;
          }
          .nav-link a {
            text-decoration: none;
            font-size: 14px;
            color: #666;
            box-sizing: border-box;
          }
          .nav-link a:hover {
            cursor: pointer;
            color: #000;
          }
        }
      `}
      </style>
    </div>
  )
};

export default SidebarSection;
