import React from "react";
import Content1 from "../components/Content1";
import Heading2 from "../components/Heading2";

function CTA() {
  return (
    <div className="flex items-center gap-8">
      <div className="flex-1">
        <Heading2 className={"text-primary"}>
          Get our best content in your inbox
        </Heading2>
        <Content1 className={"text-white"}>
          All the tips, stories, and resources you could ever need <br /> or
          want — straight to your email!
        </Content1>
      </div>
      <div className="flex-1">
        <form>
          <div className="flex gap-4">
            <input
              type="email"
              className="p-3 flex-1"
              placeholder="Email: example@gmail.com"
              required
            />
            <button className="bg-primary py-3 px-8 text-white rounded-sm">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-white pt-5">
            Your privacy matters! Help Scout only uses this info to send content
            and updates. You may unsubscribe anytime. View our privacy policy
            for more.
          </p>
        </form>
      </div>
    </div>
  );
}

export default CTA;
