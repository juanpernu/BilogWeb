const Avatar = ({src}) => {
  return (
    <div className="avatar">
      <img className="avatar" src={src} alt="Testimonial image"/>
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .avatar {
              width: 100%;
              border-radius: 50%;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .avatar {
              width: 100%;
              border-radius: 50%;
            }
          }
        `}
        </style>
    </div>
  )
}

export default Avatar
