import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  key: string;
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
};

const Movie = ({ key, id, title, poster_path, release_date }: Props) => {
  const imagePath = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <b className="text-ellipsis overflow-hidden line-clamp-1">{title}</b>
      <h2>{release_date}</h2>
      <Link href={`/movie/${id}`}>
        <Image
          width={800}
          height={800}
          src={`${imagePath}${poster_path}`}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Movie;
