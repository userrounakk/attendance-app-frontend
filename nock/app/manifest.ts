import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#4a90e2",
    background_color: "#4a90e2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    name: "nock",
    short_name: "nck",
    description: "an attendance app",
    icons: [
      {
        src: "/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/maskable.png",
        sizes: "48x48",
        type: "image/x-icon",
        purpose: "maskable",
      },
    ],
  };
}
