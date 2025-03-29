import React from "react";

import banner2 from "../assests/banner2.png";

const Banner = () => {
  return (
    <div className="relative w-[calc(100%-40px)] mx-auto h-[15vh] md:h-[60vh] flex justify-center items-center overflow-hidden rounded-xl">
      {/* Background Image */}
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <img loading = "lazy" src={banner2} alt="Banner" className="w-full h-full object-cover rounded-xl" />
      </div>
    </div>
  );
};

export default Banner;
