import Link from "next/link";
import Image from "next/image";
import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import FeaturedBlog from "@/components/FeaturedBlog";
import CTA from "@/components/Cta";

export async function getServerSideProps() {
  const blogs = await client.getAllByType("unkoded_blog");
  // console.log(blogs.data.featured);
  return {
    props: {
      blogs,
    },
  };
}

const HomePage = ({ blogs }) => {
  return (
    <Layout className="bg-primary mb-96">
      <Container>
        <FeaturedBlog
          featured={blogs.filter((item) =>
            item.data.featured ? item.data.featured : null
          )}
          className={"py-16"}
        />
      </Container>
      <div className="bg-secondary p-20">
        <Container>
          <CTA />
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 p-[80px_0px]">
          {blogs
            .filter((item) => item.data.featured != true)
            .map((item) => (
              <article key={item.id}>
                <Image
                  src={item.data.banner_image.url}
                  height={300}
                  width={500}
                  responsive="true"
                  className="rounded-lg"
                />
                <Link href={`/blog/${item.uid}`} className="relative">
                  <h1 className="text-xl font-bold py-3 text-white">
                    {item.data.title[0].text}{" "}
                  </h1>
                </Link>
                {/* <p className="text-xs">{item.data.short_desc[0].text} </p> */}
              </article>
            ))}
        </div>
      </Container>
    </Layout>
  );
};

export default HomePage;
