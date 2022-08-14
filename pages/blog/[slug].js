import { useRouter } from 'next/router'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import imageUrlBuilder from '@sanity/image-url'

const Post = ({ blog }) => {
  const router = useRouter()
  const client = createClient({
    projectId: "bwf6zco5",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-10-21"

  });
// console.log(blog)
const builder = imageUrlBuilder(client)

  return <><>
      <div>
      <div className="container py-6 md:py-10 mx-2">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center pt-5 md:pt-10">
            <h1
              className="pt-5 text-center font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
             {blog.title}
            </h1>
           
          </div>
          <div className="prose max-w-none pt-8 mx-8">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={blog.content}
              projectId="bwf6zco5"
              dataset="production"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              }}
            />

          </div>
         
        </div>
      </div>
    </div>

  

  </> </>
}

export default Post

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
        projectId: "bwf6zco5",
        dataset: "production",
        useCdn: false,
        apiVersion: "2021-10-21"
    
      });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  // console.log(blog)
  // const profileQuery = `*[_type == "profile"][0]`;
  // const profile = await client.fetch(profileQuery);
  return {
    props: {
      blog
    }
  }
}