import { prisma } from "../config/database.js";

import { CreateAnswerData } from "../services/answerService.js";

const answerRepository = {
  insert: async ({ answer, questionId }: CreateAnswerData) => {
    await prisma.answer.create({ data: { answer, questionId } });
  },

  getByQuestionId: async (questionId: number) => {
    const answers = await prisma.answer.findMany({
      where: { questionId },
    });

    return answers;
  },
};

export default answerRepository;
