"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Gallery", link: "/gallery" },
];

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeDesc, setActiveDesc] = useState<string | null>(null);

  const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/$/, "");

  const getFullImageUrl = (path: string) => {
    if (!path) return "";
    return path.startsWith("http") ? path : `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
  };

  useEffect(() => {
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getMediaImages`).then((r) => r.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getMediaVideos`).then((r) => r.json()),
    ])
      .then(([imgData, vidData]) => {
        setImages(imgData);
        setVideos(vidData);
      })
      .catch(console.error);
  }, []);

  const slides = images.map((img) => ({ src: getFullImageUrl(img.image), title: img.title }));

  return (
    <section className="bg-white">
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <div className="py-12 px-6">
        {/* IMAGES */}
        <div className="max-w-6xl mx-auto mb-6">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Image Gallery</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <div key={img.id} className="transition overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getFullImageUrl(img.image)}
                  alt={img.title}
                  onClick={() => { setIndex(i); setOpen(true); }}
                  className="w-full rounded-xl h-64 object-cover cursor-pointer"
                />
                <div className="p-4 text-center">
                  <h3 className="text-base font-medium text-gray-800">{img.title}</h3>
                  {img.description && (
                    <button
                      onClick={() => setActiveDesc(activeDesc === img.id ? null : img.id)}
                      className="text-sm text-[#172542] hover:underline mt-2"
                    >
                      {activeDesc === img.id ? "Hide Description" : "View Description"}
                    </button>
                  )}
                  {activeDesc === img.id && <p className="text-sm text-gray-600 mt-2">{img.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIDEOS */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Video Gallery</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10">
            {videos.map((video) => (
              <div key={video.id} className="overflow-hidden">
                <div className="aspect-video">
                  <iframe src={video.link} title={video.title} className="w-full h-full rounded-xl" allowFullScreen />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-base font-medium text-gray-800">{video.title}</h3>
                  {video.description && (
                    <button
                      onClick={() => setActiveDesc(activeDesc === `video-${video.id}` ? null : `video-${video.id}`)}
                      className="text-sm text-[#172542] hover:underline mt-2"
                    >
                      {activeDesc === `video-${video.id}` ? "Hide Description" : "View Description"}
                    </button>
                  )}
                  {activeDesc === `video-${video.id}` && <p className="text-sm text-gray-600 mt-2">{video.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={index}
            render={{
              slide: ({ slide }: any) => (
                <div className="flex flex-col items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={slide.src} alt={slide.title} className="max-h-[80vh] object-contain" />
                  <p className="text-white mt-4 text-lg">{slide.title}</p>
                </div>
              ),
            }}
          />
        )}
      </div>
    </section>
  );
}
