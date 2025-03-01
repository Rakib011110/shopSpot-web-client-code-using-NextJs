"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
// import "./banner.css"; // If you have additional CSS

const banners = [
  {
    id: 1,
    image:
      "https://9to5toys.com/wp-content/uploads/sites/5/2021/03/Apple-iPhone-12-Camera.jpg",
    title: "Summer Sale",
    description: "Up to 50% off on selected items",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: 2,
    image: "https://www.addictivetips.com/app/uploads/2020/11/iphone.jpg",
    title: "New Arrivals",
    description: "Discover the latest trends",
    buttonText: "Discover",
    buttonLink: "/new-arrivals",
  },
  // ...more banners
];

export default function Banner() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper max-w-7xl  mx-auto">
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          {/* 
            Fixed-size, absolutely positioned container 
            at (top=182px, left=135px, width=1187px, height=344px).
          */}
          <div className=" top-[182px] left-[135px] w-[496px]  h-[500px]">
            <Image src={banner.image} alt={banner.title} fill className="" />
            <div className="absolute inset-0 bg-black opacity-40" />

            {/* Banner Content, aligned to the left */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 text-left">
              <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
              <p className="mb-4 text-sm max-w-md">{banner.description}</p>
              <a
                href={banner.buttonLink}
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
                {banner.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
