import Icons from '../Icons/Icons'

const SocialMedia = ({type, href}) => {
  const formattedType = type.toLowerCase();
  
  return (
    <a className="social_media-link" href={href}>
      <Icons type={formattedType}/>
      <p className="social_media-text">{type}</p>
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .form-container {
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 60px 30px;
          }
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .social_media-link {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
          }
          .social_media-text {
            color: #666;
            margin: 10px 15px;
            transition: all 0.2s ease-in-out;
          }
          .social_media-text:hover {
            color: #0090ff;
          }
        }
      `}
      </style>
    </a>
  );
}

export default SocialMedia;
