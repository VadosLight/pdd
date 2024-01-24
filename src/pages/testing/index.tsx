import { useGetTicket } from "entity/api/hooks/ticket";
import { QuestionCard } from "entity/ui/question-card";
import { useReducer } from "react";
import { useParams } from "react-router-dom";
import { cloneDeep } from "lodash";
import { ProgressCards } from "shared/ui/progress-cards";

type QuizState = {
  currentStep: number;
  answers: Array<{ isCorrect: boolean; isAnswered: boolean }>;
};

enum QuizActionType {
  RIGHT_ANSWER = "RIGHT_ANSWER",
  WRONG_ANSWER = "WRONG_ANSWER",
  STEP_BACK = "STEP_BACK",
  STEP_FORWARD = "STEP_FORWARD",
}

type QuizAction = {
  type: QuizActionType;
};

const TICKET_SIZE = 20;

const answersReducer = (state: QuizState, action: QuizAction): QuizState => {
  const answersCopy = cloneDeep(state.answers);
  let newStep = state.currentStep;

  switch (action.type) {
    case QuizActionType.RIGHT_ANSWER:
      {
        answersCopy[state.currentStep] = { isAnswered: true, isCorrect: true };
      }
      break;
    case QuizActionType.WRONG_ANSWER:
      {
        answersCopy[state.currentStep] = { isAnswered: true, isCorrect: false };
      }
      break;
    case QuizActionType.STEP_BACK:
      {
        if (newStep > 0) {
          newStep--;
        }
      }
      break;
    case QuizActionType.STEP_FORWARD:
      {
        if (newStep < TICKET_SIZE) {
          newStep++;
        }
      }
      break;
    default: {
      /** */
    }
  }

  console.log({
    answers: answersCopy,
    currentStep: newStep,
  });

  return {
    answers: answersCopy,
    currentStep: newStep,
  };
};

const initialQuiz: QuizState = {
  currentStep: 0,
  answers: Array.from({ length: TICKET_SIZE }, () => {
    return { isCorrect: false, isAnswered: false };
  }),
};

export const TestingPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: ticket } = useGetTicket(`Билет ${id}.json`);
  const [quizState, quizDispatch] = useReducer(answersReducer, initialQuiz);

  if (!ticket) {
    return <></>;
  }

  const currentQuizState = quizState.answers[quizState.currentStep];

  return (
    <div>
      <ProgressCards
        items={quizState.answers}
        activeIndex={quizState.currentStep}
      />
      <QuestionCard
        {...ticket[quizState.currentStep]}
        onAnswerClick={(isCorrect) => {
          isCorrect
            ? quizDispatch({ type: QuizActionType.RIGHT_ANSWER })
            : quizDispatch({ type: QuizActionType.WRONG_ANSWER });
        }}
        isAnswered={currentQuizState.isAnswered}
        showTip={currentQuizState.isAnswered}
      />

      <button
        onClick={() => {
          quizDispatch({ type: QuizActionType.STEP_BACK });
        }}
      >
        Назад
      </button>
      <button
        onClick={() => {
          quizDispatch({ type: QuizActionType.STEP_FORWARD });
        }}
      >
        Далее
      </button>
    </div>
  );
};
