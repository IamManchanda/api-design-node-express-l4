export const config = {
  secrets: {
    jwt: "learneverything",
  },
  dbUrl:
    process.env.MONGODB_URI_TESTING ||
    "mongodb://localhost:27017/api-design-test",
};
