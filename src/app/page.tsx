import { log } from "console";
import Image from "next/image";
import React from "react";
import Movie from "./movie";

type Props = {};

const Home = async ({}: Props) => {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
  const res = await fetch(url, {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  await delay(2000);
  return (
    <div>
      <div className="grid gap-2 grid-cols-fluid">
        {data.results.map((movie: any, i: number) => {
          const { id, title, poster_path, release_date } = movie;
          return (
            <Movie
              key={id}
              title={title}
              id={id}
              poster_path={poster_path}
              release_date={release_date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

const delay = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
