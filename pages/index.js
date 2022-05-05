/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import dynamic from "next/dynamic";
// layout for page
import Layout from "layouts/Admin.js";

// import CarouselPromo from "components/Carousel/CarouselPromo";
const CarouselPromo = dynamic(
  () => {
    return import("../components/Carousel/CarouselPromo");
  },
  { ssr: false }
);

export default function Home() {
  const [content, setContent] = useState([]);
  return (
    <>
      <Layout title="Home" menu={content}>
        <div className="flex flex-wrap">
          <div className="w-full mb-12 xl:mb-0 px-4">
            {/* {content.length > 0 && <CardTable data={content} />} */}
            {typeof window !== "undefined" && <CarouselPromo />}
          </div>
        </div>
      </Layout>
    </>
  );
}
