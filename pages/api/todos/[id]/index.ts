import { deleteTodo, detailTodo, updateTodo } from "@/source/server";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, headers, query, body } = req;

  if (method === "GET") {
    const todo = await detailTodo(query.id as string, headers.user as string);

    if (!todo) {
      return res.status(404).json({ data: null, message: "Not Found" });
    }

    return res.status(200).json({ data: todo, message: "Ok" });
  }

  if (method === "PATCH") {
    const isUpdated = await updateTodo(
      query.id as string,
      headers.user as string,
      body
    );

    if (!isUpdated) {
      return res.status(404).json({ data: null, message: "Not Found" });
    }

    return res.status(200).json({ data: null, message: "Ok" });
  }

  if (method === "DELETE") {
    const isDeleted = await deleteTodo(
      query.id as string,
      headers.user as string
    );

    if (!isDeleted) {
      return res.status(404).json({ data: null, message: "Not Found" });
    }

    return res.status(204).json({ data: null, message: "Ok" });
  }

  return res.status(405).json({ error: "Method not implemented" });
}
