import React from "react";

function WorkCard({ item }) {
  return (
    <div
      className="text-center relative"
      data-aos="fade-up"
      data-aos-duration={300}
    >
      <h3 className="text-xl">{item.title}</h3>
      <p className="mt-3">{item.text}</p>
      <div className="pt-5">
        <img src={item.image} />
      </div>
      <div className="absolute h-3 w-3 rounded-full bg-purple-600 bottom-8 end-0" />
      <div className="absolute h-3 w-3 rounded-full bg-orange-400 top-60" />
    </div>
  );
}

export default WorkCard;
