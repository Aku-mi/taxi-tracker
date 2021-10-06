export default {
  PORT: process.env.PORT || 4000,
  UDP_PORT: process.env.UDP_PORT || 5000,
  JWT: {
    ACCESS: process.env.JWT_ACCESS || "acc",
    REFRESH: process.env.JWT_REFRESH || "ref",
  },
  MONGODB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/taxiT",
  },
  CORS: {
    ORIGIN: ["*", "http://localhost:3000"],
  },
};
