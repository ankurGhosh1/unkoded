import React from "react";
import Image from "next/image";

function ServiceCard({ image, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-third shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
      {/* Gradient sheen along the top edge, revealed on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          height={300}
          width={500}
          className="w-full hue-rotate-[110deg] transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="pb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-gradient">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-textGray">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
