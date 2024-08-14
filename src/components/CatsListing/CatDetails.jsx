import React from "react";

const CatDetails = ({ cat }) => {
  return (
    <div className="flex h-1/2 flex-col gap-2 px-4 py-5 font-dmsans text-sm leading-[1.4rem] tracking-tighter">
      {/* Cat Name */}
      <h2 className="text-[1.75rem] font-medium leading-9">{cat.name}</h2>

      {/* Cat Description */}
      <p>{cat.description}</p>

      {/* Cat Origin */}
      <div className="flex gap-16 text-sm">
        <h3 className="font-semibold italic">Origin</h3>
        <p>{cat.origin}</p>
      </div>

      {/* Cat Temperament */}
      <div>
        <h3 className="font-semibold italic">Temperament</h3>
        <p className="flex flex-wrap gap-2">
          {cat.temperament.split(", ").map((t, i) => (
            <span
              className="rounded-full bg-[#EFEFEF] px-2 py-px text-xs hover:cursor-pointer hover:bg-[#D482DB]"
              key={i}
            >
              {t}
            </span>
          ))}
        </p>
      </div>

      {/* Cat Life Span */}
      <div className="mb-4 flex gap-16">
        <h3 className="font-semibold italic">Life Span</h3>
        <p>{cat.life_span}</p>
      </div>

      {/* Wikipedia Link */}
      <a
        href={cat.wikipedia_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-fit flex-1 cursor-pointer items-end text-[#7D99E2]"
      >
        <p>Learn More</p>
      </a>
    </div>
  );
};

export default CatDetails;
