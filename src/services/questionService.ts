import { Question, Answer } from "@prisma/client";
import answerRepository from "../repositories/answerRepository.js";

import questionRepository from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id">;

const questionService = {
  insert: async (question: string) => {
    await questionRepository.insert(question);
  },

  get: async () => {
    const questions = await questionRepository.get();

    return { questions };
  },

  getById: async (questionId: number) => {
    const question = await questionRepository.getById(questionId);
    const answers = await answerRepository.getByQuestionId(questionId);

    return { ...question, answers };
  },
};
export default questionService;
