module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        //secure: true,
        //requireTLS: true,
        secureConnection: false, // TLS requires secureConnection to be false
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
        /* tls: {
            ciphers:'SSLv3'
        }, */
      },
      settings: {
        defaultFrom: env("SMTP_DEFAULT_FROM"),
        defaultReplyTo: env("SMTP_DEFAULT_REPLYTO"),
      },
    },
  },
});