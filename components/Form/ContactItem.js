import Icons from '../Icons/Icons'

const ContactItem = ({text, icon}) => {  
  return (
    <div className="address-container">
      <Icons type={icon}/>
      <p className="address-text">{text}</p>
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .address-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
          }
          .address-text {
            color: #666;
            margin: 10px 15px;
            transition: all 0.2s ease-in-out;
          }
          .address-text:hover {
            color: #0090ff;
          }
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .address-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
          }
          .address-text {
            color: #666;
            margin: 10px 15px;
            transition: all 0.2s ease-in-out;
          }
          .address-text:hover {
            color: #0090ff;
          }
        }
      `}
      </style>
    </div>
  );
}

export default ContactItem;
