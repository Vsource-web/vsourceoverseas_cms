/**
 * Strapi Database Configuration
 * Works for both Docker/Postgres and cloud deployments
 * (supports DATABASE_URL and individual env vars)
 */

export default ({ env }) => {
  const databaseUrl = env('DATABASE_URL');

  // --- Cloud / single connection string (e.g. Render, Railway, etc.) ---
  if (databaseUrl) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: databaseUrl,
          ssl: env.bool('DATABASE_SSL', true)
            ? { rejectUnauthorized: false }
            : false,
        },
        debug: env.bool('DATABASE_DEBUG', false),
      },
    };
  }

  // --- Default: Docker / Local Postgres ---
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'db'), // Docker service name
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi_prod'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'vsource'),
        ssl: env.bool('DATABASE_SSL', false)
          ? { rejectUnauthorized: false }
          : false,
      },
      debug: env.bool('DATABASE_DEBUG', false),
    },
  };
};
