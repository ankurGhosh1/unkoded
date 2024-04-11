import React from "react";
import Image from "next/image";
import Link from "next/link";
import useMediaMatch from "../hook/useMediaMatch";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Content1 from "./Content1";

function FeaturedBlog({ featured, className }) {
  // console.log(featured);
  const match = useMediaMatch("768px");
  return (
    <div className={className}>
      <div className="max-w-[850px] py-8">
        <Heading1>The Help Scout Blog</Heading1>
        <Content1 className={`text-textGray`}>
          Get tips and advice on delivering exceptional customer service,
          engaging and delighting your customers, and building a
          customer-centric company.
        </Content1>
      </div>
      <div className="grid grid-cols-[2fr_1fr] max-md:grid-cols-1 gap-16">
        <div>
          <div className="h-auto w-full pb-5">
            <Image
              src={featured[0].data.banner_image.url}
              height={500}
              width={850}
              responsive="true"
              className="rounded-lg h-auto w-auto"
            />
          </div>

          <Link href={`/blog/${featured[0].uid}`} className="relative">
            <Heading2 className={"text-white"}>
              {featured[0].data.title[0].text}
            </Heading2>
            <p className="text-base text-textGray">
              {featured[0].data.short_desc[0].text}
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <Image
              src={featured[1].data.banner_image.url}
              height={300}
              width={500}
              responsive="true"
              className="rounded-lg h-auto w-auto"
            />
            <Link href={`/blog/${featured[1].uid}`}>
              <h1 className="text-xl font-bold py-3 text-white">
                {featured[1].data.title[0].text}
              </h1>
              {/* <p className="text-xs">
              {featured[1].data.short_desc[0].text}
            </p> */}
            </Link>
          </div>
          {featured[2] && (
            <div>
              <Image
                src={featured[2].data.banner_image.url}
                height={300}
                width={500}
                responsive="true"
                className="rounded-lg  h-auto w-auto text-white"
              />
              <Link href={`/blog/${featured[2].uid}`}>
                <h1 className="text-xl font-bold py-3">
                  {featured[2].data.title[0].text}
                </h1>
                {/* <p className="text-xs">
              {featured[2].data.short_desc[0].text}
            </p> */}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedBlog;
