// export default ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       connectionString: env("DATABASE_URL"),
//       ssl: env.bool("DATABASE_SSL", true) && {
//         rejectUnauthorized: false,
//       },
//     },
//     debug: false,
//   },
// });

export default ({ env }) => {
  const dbUrl = env("DATABASE_URL"); // Will only exist in Cloud (or if you set it locally)

  if (dbUrl) {
    // Use Postgres (Cloud / external DB)
    return {
      connection: {
        client: "postgres",
        connection: {
          connectionString: dbUrl,
          ssl: env.bool("DATABASE_SSL", true) && {
            rejectUnauthorized: false,
          },
        },
        debug: false,
      },
    };
  }

  // Default: use SQLite locally
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      useNullAsDefault: true,
    },
  };
};
