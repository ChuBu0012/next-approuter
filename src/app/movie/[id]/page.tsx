import Image from "next/image";
import React from "react";

type Props = {
  params: { id: string };
};

const Movie = async ({ params }: Props) => {
  const { id } = params;
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const imagePath = "https://image.tmdb.org/t/p/original/";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`,
    { next: { revalidate: 10 } }
  );
  const res = await data.json();

  return (
    <div>
      <h2 className="text-4xl">{res.title}</h2>
      <h2 className="text-4xl">Runtime: {res.release_date}</h2>
      <Image
        width={800}
        height={800}
        className="mt-12 w-full"
        src={`${imagePath}${res.backdrop_path}`}
        alt={res.title}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
};

export default Movie;
