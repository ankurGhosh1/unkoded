import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Heading1 from "@/components/Heading1";
import Heading2 from "@/components/Heading2";
import Content1 from "@/components/Content1";
import Button from "@/components/Button";
import styles from "@/styles/main.module.css";
import Stats from "@/components/Stats";
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
            Fast, Reliable, and Affordable <br /> Webflow Agency.
          </Heading1>
          <Content1 className="text-center text-textGray leading-relaxed">
            At Unkoded, we specialize in transforming your <br />
            Figma designs into high-performance Webflow websites, <br />{" "}
            tailored to your unique needs.
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
            <div className="grid grid-cols-[.75fr_1fr] max-w-[1280px] gap-8 max-md:grid-cols-1">
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
                    Webflow Migration by Expert Webflow Developers
                  </h2>
                  <p className="text-base	text-textGray leading-relaxed">
                    Transition your site with ease using our experienced Webflow
                    developers. Ensure a seamless migration to Webflow,
                    preserving your site’s performance and integrity.
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
                    Seamless Webflow Integrations by Leading Webflow Agency
                  </h2>
                  <p className="text-base	text-textGray leading-relaxed">
                    Connect your Webflow site with essential tools and
                    platforms. Our leading Webflow agency specializes in
                    seamless integrations to enhance your online functionality.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_.75fr] max-w-[1280px] gap-8 max-md:grid-cols-1">
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
                    Comprehensive Webflow Maintenance by Top Webflow Experts
                  </h2>
                  <p className="text-base	text-textGray leading-relaxed">
                    Keep your Webflow site in top shape with our maintenance
                    services. Our top Webflow experts provide regular updates,
                    security checks, and performance optimizations.
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
                    Custom Webflow Development from Professional Webflow
                    Designers
                  </h2>
                  <p className="text-base	text-textGray leading-relaxed">
                    Achieve a unique, tailored website with our custom Webflow
                    development services. Our professional Webflow designers
                    bring your vision to life.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[.75fr_1fr] max-w-[1280px] gap-8 max-md:grid-cols-1">
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
                    Stunning Webflow Designs by Skilled Webflow Designers
                  </h2>
                  <p className="text-base	text-textGray leading-relaxed">
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
                    Webflow SEO Optimization & Performance Optimization
                  </h2>
                  <p className="text-base	text-textGray leading-relaxed">
                    We implement best practices to improve your search engine
                    rankings and drive organic traffic and ensure your website
                    is fast, reliable, and user-friendly. Our performance
                    optimization services enhance loading times and overall user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Stats />
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
