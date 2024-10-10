"use client";
import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

import { photos } from "@/constants/constants";
import Reveal from "./animation/reveal";

const getRandomDelay = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  const randomDelay = getRandomDelay(0.1, 0.7);

  return (
    <Reveal
      del={randomDelay}
      dur={0.7}
      position={"relative"}
      height='auto'
      var1={{ opacity: 0, x: -75 }}
      var2={{ opacity: 1, x: 0 }}
      width='100%'
    >
      <div
        style={{
          width: "100%",
          position: "relative",
          boxShadow: "5 12px 14px rgba(0, 0, 0, 0.1)",
          aspectRatio: `${width} / ${height}`,
        }}
      >
        <Image
          fill
          style={{
            boxShadow: "5 12px 14px rgba(0, 0, 0, 0.1)",
            borderRadius: "3px",
            border: "2px solid #ffffff"
          }}
          src={photo}
          alt={alt}
          title={title}
          sizes={sizes}
          placeholder={"blurDataURL" in photo ? "blur" : undefined}
        />
      </div>
    </Reveal>
  );
}

export default function PhotoGallery() {
  return (
    <RowsPhotoAlbum
      photos={photos}
      render={{ image: renderNextImage }}
      defaultContainerWidth={1000}
      sizes={{
        size: "1000px",
        sizes: [
          { viewport: "(max-width: 1000px)", size: "calc(100vw - 32px)" },
        ],
      }}
    />
  );
}
