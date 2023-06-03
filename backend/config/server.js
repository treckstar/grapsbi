module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 2337),
  url: env("SERVER_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
