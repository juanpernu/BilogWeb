import React from "react";

const Badge = ({ users, clinic, comment, location }) => {
  return (
    <div className="card--testimonial">
      {users.map((user, key) => (
        <div key={key}>
          <div className="card--testimonial-user">{user.name}</div>
        </div>
      ))}
      <div className="card--testimonial-clinic">{clinic}</div>
      <div className="card--testimonial-text">{comment}</div>
      <div className="card--testimonial-location">{location}</div>
      <style jsx>
        {`
           {
            /* STYLES FOR MOBILE */
          }
          @media only screen and (max-width: 750px) {
            .card--testimonial {
              background: #fff;
              box-sizing: border-box;
              border-radius: 5px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
              padding: 30px;
              margin: 20px 30px;
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

           {
            /* STYLES FOR DESKTOP */
          }
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
  );
};

export default Badge;
