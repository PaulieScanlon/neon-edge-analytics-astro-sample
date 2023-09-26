# Neon Edge Analytics Astro Sample

A sample repo for using Edge Analytics with Astro

## Getting Started

- Sign up to [Neon](https://neon.tech/).
- Follow our [Create your first project](https://neon.tech/docs/get-started-with-neon/setting-up-a-project) guide.

## Local Development

Install Dependencies.

```
npm
```

Rename `.env.example` to `.env` and add your Neon database connection string.

```
DATABASE_URL=
```

SQL schema

```
CREATE TABLE analytics (
  id            SERIAL PRIMARY KEY,
  date          TIMESTAMP WITH TIME ZONE NOT NULL,
  slug          VARCHAR NOT NULL,
  flag          VARCHAR,
  country       VARCHAR,
  city          VARCHAR,
  latitude      DECIMAL,
  longitude     DECIMAL
)
```

Start development server.

```
npm run dev
```
