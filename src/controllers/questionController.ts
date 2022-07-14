import { Question } from "@prisma/client";
import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService, { CreateQuestionData } from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const { question }: CreateQuestionData = req.body;

  await questionService.insert(question);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const { id } = req.params;
  const { answer } = req.body;

  await answerService.insert(answer, Number(id));
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.get();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const question = await questionService.getById(Number(id));

  res.status(200).send(question);
}
