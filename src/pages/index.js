import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Heading1 from "@/components/Heading1";
import Heading2 from "@/components/Heading2";
import Content1 from "@/components/Content1";
import Button from "@/components/Button";
import styles from "@/styles/main.module.css";

// const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout className={`bg-primary mb-96`}>
      <div
        className={`rounded-full w-full h-[600px] absolute -top-32 left-0 rotate-180 opacity-40 -z-1 ${styles.radialGradient}`}
      >
        {" "}
        {/* Your content here */}
      </div>
      <Container>
        <div className="py-32">
          <Heading1 className="text-center w-full">
            Build an online brand. <br /> Land more clients.
          </Heading1>
          <Content1 className="text-center text-textGray">
            Make your own landing page in just a few minutes. <br /> For
            freelancers and consultants. No tech skills required.
          </Content1>
          <div className="flex items-center justify-center py-5">
            <Button
              className="bg-gradient-to-r from-optional to-secondary text-xl font-semibold "
              href="/contact"
            >
              Create My Page
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-16 py-24">
            <div className="grid grid-cols-[.75fr_1fr] max-w-[940px] gap-8 max-md:grid-cols-1">
              <div className="bg-third rounded-2xl shadow-custom hover:scale-105 transition duration-200">
                <Image
                  src="/img1.png"
                  alt="image1"
                  responsive="true"
                  height={300}
                  width={500}
                />
                <div className="p-5">
                  <h2 className="text-xl text-white font-bold pb-2">
                    Connect your own domain
                  </h2>
                  <p className="text-base	text-textGray">
                    Show off your ExpertPage profile on your own domain.
                  </p>
                </div>
              </div>
              <div className="bg-third rounded-2xl shadow-custom hover:scale-105 transition duration-200">
                <Image
                  src="/img2.png"
                  alt="image1"
                  responsive="true"
                  height={300}
                  width={500}
                />
                <div className="p-5">
                  <h2 className="text-xl text-white font-bold pb-2">
                    Choose a theme
                  </h2>
                  <p className="text-base	text-textGray">
                    Pick a style for your page that best fits your personality
                    and your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_.75fr] max-w-[940px] gap-8 max-md:grid-cols-1">
              <div className="bg-third rounded-2xl shadow-custom hover:scale-105 transition duration-200">
                <Image
                  src="/img3.png"
                  alt="image1"
                  responsive="true"
                  height={300}
                  width={500}
                />
                <div className="p-5">
                  <h2 className="text-xl text-white font-bold pb-2">
                    Embed your calendar
                  </h2>
                  <p className="text-base	text-textGray">
                    Integrate with Cal.com so leads can book directly into your
                    calendar from your page.
                  </p>
                </div>
              </div>
              <div className="bg-third rounded-2xl shadow-custom hover:scale-105 transition duration-200">
                <Image
                  src="/img4.png"
                  alt="image1"
                  responsive="true"
                  height={300}
                  width={500}
                />
                <div className="p-5">
                  <h2 className="text-xl text-white font-bold pb-2">
                    Client testimonials
                  </h2>
                  <p className="text-base	text-textGray">
                    Tell your leads why they should work with you by letting
                    your clients do the talking.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[.75fr_1fr] max-w-[940px] gap-8 max-md:grid-cols-1">
              <div className="bg-third rounded-2xl shadow-custom hover:scale-105 transition duration-200">
                <Image
                  src="/img5.png"
                  alt="image1"
                  responsive="true"
                  height={300}
                  width={500}
                />
                <div className="p-5">
                  <h2 className="text-xl text-white font-bold pb-2">
                    Feature blog posts
                  </h2>
                  <p className="text-base	text-textGray">
                    Highlight your best writing by linking out to your blog
                    posts.
                  </p>
                </div>
              </div>
              <div className="bg-third rounded-2xl shadow-custom hover:scale-105 transition duration-200">
                <Image
                  src="/img6.png"
                  alt="image1"
                  responsive="true"
                  height={300}
                  width={500}
                />
                <div className="p-5">
                  <h2 className="text-xl text-white font-bold pb-2">
                    Add your products & services
                  </h2>
                  <p className="text-base	text-textGray">
                    Link out to your products and services to clients can
                    convert right there and then.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 py-24">
            <Heading1 className="text-center">
              Build an online brand. <br /> Land more clients.
            </Heading1>
            <div className="flex items-center justify-center py-5">
              <Button
                className="bg-gradient-to-r from-optional to-secondary text-xl font-semibold "
                href="/contact"
              >
                Create My Page
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
