import React from "react";
import { useLocation } from "react-router-dom";

export default function Question() {
  const loc = new useLocation();
  const { title, description } = loc.state.selectedquestion;

  return (
    <section className="p-4 overflow-y-auto w-[50vw] overflow-x-hidden text-white bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="w-[48vw]">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
