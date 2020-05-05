import Layout from '../components/Layout';
import Title from '../components/Title';
import Posts from '../components/Posts';
import fetch from 'isomorphic-unfetch';

Blog.getInitialProps = async ctx => {
  const res = await fetch('https://bilog-documentation.herokuapp.com/api/v1/posts')
  const json = await res.json()
  return { posts: json.data.posts }
}

function Blog({ posts }) {
  return (
    <Layout>
      <section className="blog-cover">
        <Title
          title="Toda la información que necesitas, está aca."
          subtitle="Novedades, Tendencias, Marketing, Wi-Fi, Tecnología y Negocios. ¡No te pierdas ninguna publicación!"
          alignCenter={true}
        />
      </section>
      <Posts posts={posts} />
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .blog-cover {
              padding-top: 100px;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .blog-cover {
              padding-top: 200px;
            }
        `}
      </style>
    </Layout>
  )
}

export default Blog;