import React from "react";

const Filteration = ({length, cat} : {length: number, cat:string}) => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 px-10 bg-gray-50 rounded-lg shadow-sm">
      {/* Left - Properties Count */}
      <div>
        <p className="text-gray-700 font-medium">
          {length} Properties for {cat}
        </p>
      </div>

      {/* Right - Sorting Dropdown */}
      <div>
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none"
          defaultValue="hightolow"
        >
          <option value="new">Newest Listed</option>
          <option value="old">Oldest Listed</option>
          <option value="hightolow">Price High → Low</option>
          <option value="lowtohigh">Price Low → High</option>
        </select>
      </div>
    </section>
  );
};

export default Filteration;
