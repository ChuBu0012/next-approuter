"use Client";
import React from "react";

type Props = {};
type Api = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const About = async ({}: Props) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await result.json();
  delay(1000);
  return (
    <div>
      {data.map((e: Api) => (
        <li key={e.id}>{e.title}</li>
      ))}
    </div>
  );
};

export default About;

const delay = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
