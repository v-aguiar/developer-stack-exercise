import { Answer } from "@prisma/client";

import answerRepository from "../repositories/answerRepository.js";

export type CreateAnswerData = Omit<Answer, "id">;

const answerService = {
  insert: async (answer: string, questionId: number) => {
    const createAnswerData: CreateAnswerData = { answer, questionId };

    await answerRepository.insert(createAnswerData);
  },
};
export default answerService;
