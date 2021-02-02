import React, { useContext, useEffect, useState } from 'react';

import { DocsContext } from '../../contexts/docContext';

const SidebarSection = ({text, hash}) => {
  const { allContent } = useContext(DocsContext);
  const [link, setLink] = useState(hash);

  useEffect(() => {
    if(window) {
      let url = window.location.href;
      const lastNonCharacter = new RegExp(/(\/)$/gm);
      setLink(`${url}${hash}`);

      // Workarround to handle hash match
      if(url.match(lastNonCharacter)) {
        url.replace(lastNonCharacter, '');
        setLink(`${url}${hash}`);
      }
    }
  }, []);

  const handleOnClick = () => {
    const regexp = new RegExp(/\#(.*)/gm);
    const contentId = hash.match(regexp);
    allContent(contentId);
  };

  return (
    <div className="link">
      <div className="nav-link">
        <a onClick={() => handleOnClick()} href={link}>{text}</a>
      </div>
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .nav-link a {
            text-decoration: none;
            font-size:1.2rem;
            font-weight:300;
            color: #222;
            box-sizing: border-box;
          }
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
