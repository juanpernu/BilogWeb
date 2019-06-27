const Sidebar = () => (
  <aside className="sidebar">
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
        .sidebar {
          background-color: red;
        }
      }
    `}
    </style>
  </aside>
)

export default Sidebar;
