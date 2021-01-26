import React from "react";

const Badge = ({ users, clinic, comment, location }) => {
  return (
    <div className="card--testimonial">
      <div className="card--testimonial-user">
        {users.map((user, key) => <h3 key={key}>{user.name}</h3>)}
      </div>
      <p className="card--testimonial-clinic">{clinic}</p>
      <p className="card--testimonial-text">{comment}</p>
      <p className="card--testimonial-location">{location}</p>
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
              padding: 10px 20px;
              margin: 20px auto;
              width: 85%;
              height: auto;
            }
            .card--testimonial-user {
              color: #111;
              text-align: center;
              font-weight: 700;
              font-size: 18px;
              margin: 10px auto;
            }
            .card--testimonial-user > h3 {
              display: block;
            }
            .card--testimonial-clinic {
              color: #111;
              text-align: center;
              font-weight: 550;
              font-size: 16px;
            }
            .card--testimonial-text {
              color: #111;
              text-align: center;
              font-weight: 300;
              font-size: 18px;
              margin: 10px 0 15px;
            }
            .card--testimonial-location {
              color: #111;
              text-align: center;
              font-weight: 600;
              font-size: 16px;
            }
          }

           {
            /* STYLES FOR DESKTOP */
          }
          @media only screen and (min-width: 751px) {
            .card--testimonial {
              margin: 15px auto;
              background: #fff;
              box-sizing: border-box;
              border-radius: 5px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
              padding: 10px 20px;
              width: 47%;
              height: 340px;
            }
            .card--testimonial-user {
              color: #111;
              text-align: center;
              font-weight: 700;
              font-size: 18px;
              margin: 10px auto;
              display: flex;
              justify-content: space-evenly;
            }
            .card--testimonial-user > h3 {
              display: inline-block;
            }
            .card--testimonial-clinic {
              color: #111;
              text-align: center;
              font-weight: 550;
              font-size: 16px;
            }
            .card--testimonial-text {
              color: #111;
              text-align: center;
              font-weight: 300;
              font-size: 18px;
              margin: 10px 0 15px;
            }
            .card--testimonial-location {
              color: #111;
              text-align: center;
              font-weight: 600;
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Badge;
