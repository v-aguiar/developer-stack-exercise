import { Question } from "@prisma/client";
import { prisma } from "../config/database.js";

const questionRepository = {
  insert: async (question: string) => {
    await prisma.question.create({ data: { question } });
  },

  get: async () => {
    return await prisma.question.findMany();
  },

  getById: async (questionId: number) => {
    return await prisma.question.findUnique({ where: { id: questionId } });
  },
};

export default questionRepository;
