import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack: (config) => {
    if (!config.devServer){
      config.devServer = {};
    }

    config.devServer.headers = () => {
      return [{
        key: "hello", 
        value: "world"
      }]
    }
    return config;   
  }
}



export default nextConfig;
