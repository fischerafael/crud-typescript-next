import { detailTodo } from "@/source/server";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers, query } = req;

  if (method === "GET") {
    const todo = await detailTodo(query.id as string, headers.user as string);

    if (!todo) {
      return res.status(404).json({ data: null, message: "Not Found" });
    }

    return res.status(200).json({ data: todo, message: "Ok" });
  }

  return res.status(405).json({ error: "Method not implemented" });
}
