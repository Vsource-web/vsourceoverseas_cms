export default ({ env }) => {
  const databaseUrl = env("DATABASE_URL");

  if (databaseUrl) {
    return {
      connection: {
        client: "postgres",
        connection: {
          connectionString: databaseUrl,
          ssl: env.bool("DATABASE_SSL", true)
            ? { rejectUnauthorized: false }
            : false,
        },
        debug: env.bool("DATABASE_DEBUG", false),
      },
    };
  }

  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "db"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi_prod"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "vsource"),
        ssl: env.bool("DATABASE_SSL", false)
          ? { rejectUnauthorized: false }
          : false,
      },
      debug: env.bool("DATABASE_DEBUG", false),
    },
  };
};

// export default ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: env("DATABASE_FILENAME", ".tmp/data.db"),
//     },
//     useNullAsDefault: true,
//     debug: false,
//   },
// });
