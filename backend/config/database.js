module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "laravel_strapi"),
      user: env("DATABASE_USERNAME", "laravel_user"),
      password: env("DATABASE_PASSWORD", "drUiGJVyDnZ0dy"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
  },
});
