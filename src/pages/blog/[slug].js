// pages/blog/[uid].js
import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Heading1 from "@/components/Heading1";
import CTA from "@/components/Cta";
import Image from "next/image";

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const blog = await client.getByUID("unkoded_blog", slug);
  // console.log(blog);

  // If no blog is returned, return a 404 status
  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blog },
  };
}

const Post = ({ blog }) => {
  // Ensure blog exists before attempting to render
  if (!blog) return <p>Post not found!</p>;

  return (
    <Layout className={`bg-primary mb-96`}>
      <Container>
        <div className="py-24 text-textGray">
          <article>
            <div className="flex flex-col items-center justify-center py-5">
              <Heading1 className={"text-center max-w-[940px]"}>
                {RichText.asText(blog.data.title)}
              </Heading1>
              <div className="flex gap-4">
                <p className="text-base text-white">{blog.data.date}</p>
                <p className="text-base text-textGray">
                  {blog.data.author[0].text}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-16">
              <Image
                src={blog.data.banner_image.url}
                alt={blog.data.banner_image.alt || "Banner Image"}
                responsive="true"
                height={500}
                width={1200}
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center gap-8 max-w-[960px] text-xl text-white leading-loose">
                {RichText.render(blog.data.content)}
              </div>
            </div>
          </article>
        </div>
      </Container>

      <div className="bg-secondary p-20">
        <Container>
          <CTA />
        </Container>
      </div>
    </Layout>
  );
};

export default Post;
