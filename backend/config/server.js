module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 2337),
  url: "https://thats.my.aggressivecache.com",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
