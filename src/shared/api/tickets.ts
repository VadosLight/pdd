import { axiosInstancePublic } from ".";
import z from "zod";

const answerScheme = z.object({
  answer_text: z.string(),
  is_correct: z.boolean(),
});

export type Answer = z.infer<typeof answerScheme>;

const ticketScheme = z.object({
  answer_tip: z.string(),
  answers: z.array(answerScheme),
  correct_answer: z.string(),
  image: z.string(),
  question: z.string(),
  ticket_category: z.string(),
  ticket_number: z.string(),
  title: z.string(),
  topic: z.array(z.string()),
});

export type Ticket = z.infer<typeof ticketScheme>;

export const getTicket = async (name: string): Promise<Ticket[]> => {
  const { data } = await axiosInstancePublic.get(`tickets/${name}`);
  return z.array(ticketScheme).parse(data);
};

export const getAllTickets = async () => {
  return Array.from({ length: 40 }, (_, i) => ({
    name: `Билет ${i + 1}.json`,
    id: i + 1,
  }));
};

await getAllTickets();
