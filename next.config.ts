import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "", // Pas de chemin supplémentaire
  api: {
    bodyParser: true, // Activez si nécessaire
  },
};

export default nextConfig;
