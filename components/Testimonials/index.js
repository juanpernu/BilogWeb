import React, { Fragment } from "react";
import Title from "../Title";
import { TestimonialsMock } from "../../mocks/testimonials";
import Badge from "./Badge";

const Testimonials = () => {
  return (
    <div>
      <div className="title--container">
        <Title
          title="¿Qué opinan nuestros usuarios?"
          subtitle="Miles de profesionales como vos eligen y siguen eligiendo a Bilog"
          alignCenter={true}
        />
      </div>
      <div className="testimonial--container">
        {TestimonialsMock.map((testimony, key) => {
          const { users, clinic, comment, location } = testimony;
          return (
            <Fragment key={key}>
              <Badge
                users={users}
                clinic={clinic}
                comment={comment}
                location={location}
              />
            </Fragment>)
        })}
      </div>
      <style jsx>
          {`
            {
              /* STYLES FOR MOBILE */
            }
            @media only screen and (max-width: 750px) {
              .title--container {
                padding-top: 50px;
              }
              .testimonial--container {
                background: #fff;
                border-bottom: 1px solid #eaeaea;
                display: flex;
                flex-direction: column;
                padding-bottom: 20px;
              }
            }

            {
              /* STYLES FOR DESKTOP */
            }
            @media only screen and (min-width: 751px) {
              .title--container {
                padding: 180px 0 50px;
              }
              .testimonial--container {
                background: #fff;
                border-bottom: 1px solid #eaeaea;
                display: flex;
                flex-direction: row;
                flex-flow: row wrap;
                max-width: 1024px;
                margin: 0 auto;
                padding-bottom: 20px;
              }
            }
          `}
        </style>
    </div>
  );
};

export default Testimonials;
