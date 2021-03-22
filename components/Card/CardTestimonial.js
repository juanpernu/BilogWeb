import Avatar from '../Avatar'

const CardTestimonial = ({avatarSrc, userName, testimonialText}) => {
  return(
    <div className="card--testimonial">
      <div className="card--testimonial-avatar">
        <Avatar
          src={avatarSrc}
        />
      </div>
      <p className="card--testimonial-user">
        {userName}
      </p>
      <p className="card--testimonial-text">
        {`"${testimonialText}"`}
      </p>
      <style jsx>
          {`
            {/* STYLES FOR MOBILE */}
            @media only screen and (max-width: 750px) {
              .card--testimonial {
                background: #fff;
                box-sizing: border-box;
                border-radius: 5px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
                padding: 30px;
                margin: 20px 30px;
              }
              .card--testimonial-avatar {
                width: 60px;
                margin: 0 auto;
              }
              .card--testimonial-user {
                color: #111;
                text-align: center;
                font-weight: 700;
                font-size: 14px;
                margin: 10px 0 20px;
              }
              .card--testimonial-text {
                color: #111;
                text-align: center;
                font-weight: 300;
                font-size: 14px;
              }
            }

            {/* STYLES FOR DESKTOP */}
            @media only screen and (min-width: 751px) {
              .card--testimonial {
                max-width: 600px;
                margin: 20px auto;
                background: #fff;
                box-sizing: border-box;
                border-radius: 5px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
                padding: 30px;
              }
              .card--testimonial-avatar {
                width: 100px;
                margin: 0 auto;
              }
              .card--testimonial-user {
                color: #111;
                text-align: center;
                font-weight: 700;
                font-size: 18px;
                margin: 10px 0 20px;
              }
              .card--testimonial-text {
                color: #111;
                text-align: center;
                font-weight: 300;
                font-size: 18px;
              }
            }
          `}
          </style>
    </div>
  )
}

export default CardTestimonial
