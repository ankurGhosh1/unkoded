import React from "react";
import Content1 from "../components/Content1";
import Heading2 from "../components/Heading2";

function CTA() {
  return (
    <div className="flex items-center gap-12 max-md:flex-col max-md:items-start max-md:gap-8">
      <div className="flex-1">
        <Heading2 className={"text-white"}>
          Get our best content in your inbox
          <span className="text-accent">.</span>
        </Heading2>
        <Content1 className={"text-textGray"}>
          All the tips, stories, and resources you could ever need <br /> or
          want — straight to your email!
        </Content1>
      </div>
      <div className="flex-1">
        <form>
          <div className="flex gap-3 max-sm:flex-col">
            <input
              type="email"
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white placeholder-textGray outline-none transition-colors duration-300 focus:border-accent"
              placeholder="Email: example@gmail.com"
              required
            />
            <button className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-primary transition-transform duration-300 hover:scale-105">
              Subscribe
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>
          <p className="pt-5 text-xs text-textGray">
            Your privacy matters! We only use this info to send content and
            updates. You may unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
}

export default CTA;
