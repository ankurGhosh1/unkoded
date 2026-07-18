import Layout from "../components/Layout";
import Container from "../components/Container";
import Heading1 from "@/components/Heading1";
import Heading2 from "@/components/Heading2";
import Button from "@/components/Button";
import Stats from "@/components/Stats";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/anim/Reveal";
import Marquee from "@/components/anim/Marquee";
import Link from "next/link";
import dynamic from "next/dynamic";

const DustPortrait = dynamic(
  () => import("@/components/anim/DustPortrait"),
  { ssr: false }
);

const SERVICES = [
  {
    image: "/img1.png",
    title: "Webflow Migration by Expert Webflow Developers",
    description:
      "Transition your site with ease using our experienced Webflow developers. Ensure a seamless migration to Webflow, preserving your site’s performance and integrity.",
  },
  {
    image: "/img2.png",
    title: "Seamless Webflow Integrations by Leading Webflow Agency",
    description:
      "Connect your Webflow site with essential tools and platforms. Our leading Webflow agency specializes in seamless integrations to enhance your online functionality.",
  },
  {
    image: "/img3.png",
    title: "Comprehensive Webflow Maintenance by Top Webflow Experts",
    description:
      "Keep your Webflow site in top shape with our maintenance services. Our top Webflow experts provide regular updates, security checks, and performance optimizations.",
  },
  {
    image: "/img4.png",
    title: "Custom Webflow Development from Professional Webflow Designers",
    description:
      "Achieve a unique, tailored website with our custom Webflow development services. Our professional Webflow designers bring your vision to life.",
  },
  {
    image: "/img5.png",
    title: "Stunning Webflow Designs by Skilled Webflow Designers",
    description:
      "Make a lasting first impression with pixel-perfect, conversion-focused designs crafted by our skilled Webflow designers.",
  },
  {
    image: "/img6.png",
    title: "Webflow SEO Optimization & Performance Optimization",
    description:
      "We implement best practices to improve your search engine rankings, drive organic traffic, and ensure your website is fast, reliable, and user-friendly.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dig into your goals, audience, and brand to map out exactly what your site needs to achieve.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Your Figma designs are refined into pixel-perfect, conversion-focused layouts for every breakpoint.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "We build it in Webflow with clean class structures, rich interactions, and blazing-fast load times.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Launch day and beyond — SEO setup, analytics, training, and ongoing support to keep you growing.",
  },
];

const MARQUEE_ITEMS = [
  "Webflow",
  "Next.js",
  "Figma",
  "GSAP",
  "SEO",
  "Tailwind CSS",
  "E-commerce",
  "CMS",
];

export default function Home() {
  return (
    <Layout className="bg-primary mb-96">
      <Hero />

      <Marquee items={MARQUEE_ITEMS} className="py-10" />

      <Container>
        <div className="py-16">
          {/* Services */}
          <div className="flex flex-col items-center justify-center gap-16 py-16">
            <Reveal className="text-center">
              <Heading2 className="text-white">
                Everything Your Website Needs, <br />
                <span className="text-gradient">Under One Roof</span>
                <span className="text-accent">.</span>
              </Heading2>
            </Reveal>

            <div className="grid max-w-[1280px] grid-cols-[.75fr_1fr] gap-8 max-md:grid-cols-1">
              {SERVICES.slice(0, 2).map((service, i) => (
                <Reveal key={service.title} delay={i * 0.1}>
                  <ServiceCard {...service} />
                </Reveal>
              ))}
            </div>

            <div className="grid max-w-[1280px] grid-cols-[1fr_.75fr] gap-8 max-md:grid-cols-1">
              {SERVICES.slice(2, 4).map((service, i) => (
                <Reveal key={service.title} delay={i * 0.1}>
                  <ServiceCard {...service} />
                </Reveal>
              ))}
            </div>

            <div className="grid max-w-[1280px] grid-cols-[.75fr_1fr] gap-8 max-md:grid-cols-1">
              {SERVICES.slice(4, 6).map((service, i) => (
                <Reveal key={service.title} delay={i * 0.1}>
                  <ServiceCard {...service} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center py-16">
            <Stats />
          </div>

          {/* About */}
          <section id="about" className="scroll-mt-24 py-16">
            <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_.8fr] items-center gap-16 max-lg:grid-cols-1">
              <Reveal className="flex flex-col items-start gap-7">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-textGray">
                  Webflow <span className="text-accent">/</span> Next.js{" "}
                  <span className="text-accent">/</span> SEO
                </p>

                <h2 className="font-serif text-8xl leading-[0.95] max-md:text-6xl">
                  <span className="block text-white">Ankur</span>
                  <span className="block text-textGray">
                    Ghosh<span className="text-accent">.</span>
                  </span>
                </h2>

                <p className="max-w-xl text-xl leading-relaxed text-textGray">
                  The developer behind Unkoded. For 6+ years I&apos;ve been
                  turning designs into fast, pixel-perfect websites in Webflow
                  and Next.js — with SEO treated as engineering, not an
                  afterthought. On-page structure, semantic markup, Core Web
                  Vitals, schema, and crawlability are baked in from the first
                  line, so the sites I ship don&apos;t just look sharp — they
                  get found.
                </p>

                <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start">
                  <Button href="/contact">Get in Touch</Button>
                  <Link
                    href="/blog"
                    className="rounded-full border border-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent no-underline transition-colors duration-300 hover:bg-accent hover:text-white"
                  >
                    Read the Blog
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <DustPortrait
                  src="/ankurg.jpg"
                  alt="Ankur Ghosh, founder of Unkoded"
                />
                <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-textGray">
                  ( hover <span className="text-accent">—</span> dust to light )
                </p>
              </Reveal>
            </div>
          </section>

          {/* Process */}
          <div className="py-16">
            <Reveal className="text-center">
              <Heading2 className="text-white">
                From Figma File to <span className="text-gradient">Live Site</span>
                <span className="text-accent">.</span>
              </Heading2>
            </Reveal>
            <Reveal
              stagger={0.15}
              className="mx-auto mt-16 grid max-w-[1280px] grid-cols-4 gap-x-10 gap-y-14 max-lg:grid-cols-2 max-sm:grid-cols-1"
            >
              {PROCESS.map((item) => (
                <div
                  key={item.step}
                  className="group relative border-t border-white/10 pt-8"
                >
                  <span className="absolute -top-[2.5px] left-0 h-[5px] w-[5px] rounded-full bg-accent transition-all duration-500 group-hover:w-12" />
                  <span className="block text-7xl font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] transition-all duration-300 group-hover:[-webkit-text-stroke:1.5px_#ff4133]">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-textGray">
                    {item.description}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Final CTA */}
          <Reveal className="py-16">
            <div className="glass relative mx-auto max-w-[1280px] overflow-hidden rounded-3xl px-8 py-20 text-center">
              <div className="absolute -top-24 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-secondary/25 blur-3xl animate-pulseGlow" />
              <div className="relative flex flex-col items-center justify-center gap-4">
                <Heading1 className="text-center">
                  Build an online brand. <br />
                  <span className="text-gradient">Land more clients</span>
                  <span className="text-accent">.</span>
                </Heading1>
                <div className="flex items-center justify-center py-5">
                  <Button href="/contact">Create My Page</Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Layout>
  );
}
