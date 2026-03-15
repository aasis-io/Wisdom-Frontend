import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getMediaImages, getMediaVideos } from "../services/api";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeDesc, setActiveDesc] = useState(null);

  const baseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");

  const getFullImageUrl = (path) => {
    if (!path) return "";
    return path.startsWith("http")
      ? path
      : `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
  };

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const imageData = await getMediaImages();
        const videoData = await getMediaVideos();

        setImages(imageData);
        setVideos(videoData);
      } catch (err) {
        console.error("Error loading media:", err);
      }
    };

    fetchMedia();
  }, []);

  const slides = images.map((img) => ({
    src: getFullImageUrl(img.image),
    title: img.title,
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* IMAGES SECTION */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Image Gallery
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div key={img.id} className="transition overflow-hidden">
              <img
                src={getFullImageUrl(img.image)}
                alt={img.title}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className="w-full rounded-xl h-64 object-cover cursor-pointer"
              />

              <div className="p-4 text-center">
                <h3 className="text-base font-medium text-gray-800">
                  {img.title}
                </h3>

                {img.description && (
                  <button
                    onClick={() =>
                      setActiveDesc(activeDesc === img.id ? null : img.id)
                    }
                    className="text-sm text-[#172542] hover:underline mt-2"
                  >
                    {activeDesc === img.id
                      ? "Hide Description"
                      : "View Description"}
                  </button>
                )}

                {activeDesc === img.id && (
                  <p className="text-sm text-gray-600 mt-2">
                    {img.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEOS SECTION */}

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Video Gallery
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10">
          {videos.map((video) => (
            <div key={video.id} className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={video.link}
                  title={video.title}
                  className="w-full h-full rounded-xl"
                  allowFullScreen
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-base font-medium text-gray-800">
                  {video.title}
                </h3>

                {video.description && (
                  <button
                    onClick={() =>
                      setActiveDesc(
                        activeDesc === `video-${video.id}`
                          ? null
                          : `video-${video.id}`
                      )
                    }
                    className="text-sm text-[#172542] hover:underline mt-2"
                  >
                    {activeDesc === `video-${video.id}`
                      ? "Hide Description"
                      : "View Description"}
                  </button>
                )}

                {activeDesc === `video-${video.id}` && (
                  <p className="text-sm text-gray-600 mt-2">
                    {video.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE LIGHTBOX */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        render={{
          slide: ({ slide }) => (
            <div className="flex flex-col items-center">
              <img
                src={slide.src}
                alt={slide.title}
                className="max-h-[80vh] object-contain"
              />
              <p className="text-white mt-4 text-lg">{slide.title}</p>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default Gallery;
