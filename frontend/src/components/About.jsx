import React, {useEffect} from 'react';
import about from "../assests/about.jpeg";
 
const About = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

    return (
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl p-4 bg-transparent md:mx-20 md:my-12">
        {/* Left Div - Image */}
        <div className="md:w-1/2 p-2 md:my-[30px]">
          <img 
            src={about} 
            alt="Placeholder" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        {/* Right Div - Text Container */}
        <div className="w-full md:w-1/2 p-2 flex flex-col justify-center">
          {/* First Paragraph */}
          <div className="p-2 md:my-[-40px]">
            <h2 className="text-2xl font-bold">About Us</h2>
            <p className="text-lg font-normal">
            Our journey began with a vision to offer customers a perfect blend of durability, design, and affordability. Over the years, we have meticulously built a brand that prioritizes customer satisfaction, ensuring that every product we offer meets the highest standards of craftsmanship and quality. Whether you’re looking for the latest fashion trends or timeless classics, we provide an extensive range of footwear to suit every occasion.
            </p>
          </div>
          
          {/* Second Paragraph */}
          <div className="p-2 md:my-10">
            <p className="text-lg font-normal">
            Our journey began with a vision to offer customers a perfect blend of durability, design, and affordability. Over the years, we have meticulously built a brand that prioritizes customer satisfaction, ensuring that every product we offer meets the highest standards of craftsmanship and quality. Whether you’re looking for the latest fashion trends or timeless classics, we provide an extensive range of footwear to suit every occasion.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  