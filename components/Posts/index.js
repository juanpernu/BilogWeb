const Post = ({ content }) => {
  const { title, description, author, link, thumbnail } = content;
  return (
    <div className="post-card">
      <img alt="Post thumbnail" className="post-card--thumbnail" src={thumbnail} />
      <span className="post-card--author">{author}</span>
      <h2 className="post-card--title">{title}</h2>
      <p className="post-card--description">{description}</p>
      <a href={link} className="post-card--link">Ver más</a>
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .post-card {
              margin-bottom: 30px;
              padding: 20px 30px;
              box-sizing: border-box;
              background: #fff;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
              border-radius: 5px;
              display: inline;
              width: 300px;
              height: 365px;
            }
            .post-card--thumbnail {
              display: block;
              width: 100%;
            }
            .post-card--author {
              font-size: 12px;
            }
            .post-card--title {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 0;
            }
            .post-card--description {
              font-size: 14px;
              max-height: 80px;
            }
            .post-card--description,
            .post-card--title {
              overflow-wrap: break-word;
              word-wrap: break-word;
              hyphens: auto;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .post-card--link {
              appearance: none;
              align-items: center;
              display: flex;
              height: 40px;
              padding: 0 25px;
              outline: none;
              border: 1px solid #007aff;
              font-size: 12px;
              justify-content: center;
              text-transform: uppercase;
              text-decoration: none;
              cursor: pointer;
              text-align: center;
              user-select: none;
              font-weight: 100;
              position: relative;
              overflow: hidden;
              transition: all 0.15s ease;
              border-radius: 5px;
              white-space: nowrap;
              line-height: 0;
              box-shadow: 0 5px 10px rgba(0,0,0,0.12);
              color: #fff;
              background: #007aff;
              align-self: baseline;
            }
            .post-card--link:hover {
              box-shadow: 0 7px 20px rgba(0,0,0,0.16);
              transform: translateY(-1px);
            }
          }
        `}
      </style>
    </div>
  )
}

const Posts = ({ posts }) => {
  return (
    <React.Fragment>
      <div className='posts-container'>
        {posts.map(post => <Post content={post} />)}
      </div>
      <style jsx>
        {`
            {/* STYLES FOR MOBILE */}
            @media screen and (max-width: 750px) {
              .posts-container {
                margin: 0 40px;
              }
            }

            {/* STYLES FOR DESKTOP */}
            @media screen and (min-width: 751px) {
              .posts-container {
                display: grid;
                grid-template-columns: 33% 33% 33%;
                margin: 100px auto;
                width: 1080px;
              }
            }
          `}
      </style>
    </React.Fragment>
  )
}

export default Posts;
