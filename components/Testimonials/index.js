import React from "react";
import Title from "../Title";
import { TestimonialsMock } from "../../mocks/testimonials";
import Badge from "./Badge";

const Testimonials = () => {
  return (
    <div className="testimonial--container">
      <Title
        title="¿Qué dicen nuestros usuarios?"
        subtitle="Miles de profesionales como vos usan Bilog"
        alignCenter={true}
      />
      {TestimonialsMock.map((testimony, key) => {
        const { users, clinic, comment, location } = testimony;
        return (
          <div key={key}>
            <Badge
              users={users}
              clinic={clinic}
              comment={comment}
              location={location}
            />
          </div>)
      })}
      <style jsx>
        {`
           {
            /* STYLES FOR MOBILE */
          }
          @media only screen and (max-width: 750px) {
            .testimonial--container {
              padding: 50px 0;
              background: #fff;
              border-bottom: 1px solid #eaeaea;
            }
          }

           {
            /* STYLES FOR DESKTOP */
          }
          @media only screen and (min-width: 751px) {
            .testimonial--container {
              padding: 90px 0 50px;
              background: #fff;
              border-bottom: 1px solid #eaeaea;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
