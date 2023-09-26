import { neon } from '@neondatabase/serverless';
import { geolocation } from '@vercel/edge';

const sql = neon(import.meta.env.DATABASE_URL);

export async function POST({ params, request }) {
  const date = new Date();
  const { slug } = await new Response(request.body).json();

  const { flag, country, city, latitude, longitude } = geolocation(request);

  if (!(flag && country && city && latitude && longitude && slug)) {
    return Response.json({ message: 'Missing required parameters' });
  } else {
    await sql(
      'INSERT INTO analytics(date, slug, flag, country, city, latitude, longitude) VALUES($1, $2, $3, $4, $5, $6, $7)',
      [date, slug, flag, country, city.replace(/[^a-zA-Z ]/g, ' '), latitude, longitude]
    );

    return Response.json({ message: 'A Ok!' });
  }
}

export const config = {
  runtime: 'edge',
};
