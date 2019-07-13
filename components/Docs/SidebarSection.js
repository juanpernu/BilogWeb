const SidebarSection = ({text}) => (
  <div className="link">
    <div className="nav-link">
      <a>{text}</a>
    </div>
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .link {
          margin-bottom: 10px;
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

export default SidebarSection;
