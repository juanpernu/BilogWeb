import Link from 'next/link';

const Column = ({items, title}) => {
  return(
    <div className="column">
      <h4 className="title">{title}</h4>
      {
        items.map((item, index) => {
          return(
            item.href.includes('http') ?
                <a key={index} className="link" href={`${item.href}`}>{item.text}</a> :
              <Link key={index} href={`${item.href}`}>
                <a className="link">{item.text}</a>
              </Link>
          )
        })
      }
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .column {
              display: inline-block;
              justify-content: left;
              padding: 20px 30px 0;
            }
            .link {
              font-size: 14px;
              padding: 0.3em;
              color: #999;
              text-decoration: none;
              transition: 0.3s ease;
              margin-top: 0;
              margin-bottom: 0.25rem;
              display: block;
            }
          }
          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .column {
              display: inline-block;
              justify-content: left;
              padding: 50px 50px 0;
            }
            .link {
              font-size: 14px;
              padding: 0.3em;
              color: #999;
              text-decoration: none;
              transition: 0.3s ease;
              margin-top: 0;
              margin-bottom: 0.25rem;
              display: block;
            }
            .link:hover {
              color: #0090ff;
            }
        `}
        </style>
    </div>
  )
}

export default Column