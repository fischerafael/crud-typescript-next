import { createTodo, listTodos } from "@/source/server";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers, body } = req;

  if (method === "GET") {
    const todos = await listTodos(headers.user as string);
    return res.status(200).json({ data: todos, message: "Ok" });
  }

  if (method === "POST") {
    await createTodo(body.description as string, headers.user as string);
    return res.status(200).json({ data: null, message: "Ok" });
  }

  return res.status(405).json({ error: "Method not implemented" });
}
