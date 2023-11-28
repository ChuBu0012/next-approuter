import { NextRequest, NextResponse } from "next/server";

const DATA_URL = "https://jsonplaceholder.typicode.com/todos";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const GET = async () => {
  const data = await fetch(DATA_URL);
  const res: Todo[] = await data.json();
  return NextResponse.json(res);
};
