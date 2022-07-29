module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        //secure: true,
        //requireTLS: true,
        secureConnection: false, // TLS requires secureConnection to be false
        auth: {
          user: "aggressivecache@gmail.com",
          pass: "ktskihwcrmdndlwr",
        },
        /* tls: {
            ciphers:'SSLv3'
        }, */
      },
      settings: {
        defaultFrom: "aggressivecache@gmail.com",
        defaultReplyTo: "aggressivecache@gmail.com",
      },
    },
  },
});