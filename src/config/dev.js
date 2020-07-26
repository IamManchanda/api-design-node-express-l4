export const config = {
  secrets: {
    jwt: "learneverything",
  },
  dbUrl:
    process.env.MONGODB_URI_DEVELOPMENT ||
    "mongodb://localhost:27017/api-design-dev",
};
