import { Ticket } from "shared/api/tickets";
import styles from "./index.module.css";
import clsx from "clsx";

type PropTypes = Pick<
  Ticket,
  "answers" | "question" | "image" | "title" | "answer_tip"
> & {
  isAnswered: boolean;
  onAnswerClick: (isCorrect: boolean) => void;
  showTip: boolean;
};

export const QuestionCard = (props: PropTypes) => {
  const handleAnswer = (isCorrect: boolean) => {
    if (props.isAnswered) {
      return;
    }

    props.onAnswerClick(isCorrect);
  };

  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>
      <img src={`/img/ticket/${props.image}`} className={styles.img} />
      <h3>{props.question}</h3>

      <div className={styles.answers}>
        {props.answers.map((answer) => {
          return (
            <button
              key={answer.answer_text}
              className={clsx({
                [styles.btn_answered]: props.isAnswered,
                [styles.btn_correct]: answer.is_correct,
              })}
              onClick={() => {
                handleAnswer(answer.is_correct);
              }}
            >
              {answer.answer_text}
            </button>
          );
        })}
      </div>

      {props.showTip && <p className={styles.tip}>{props.answer_tip}</p>}
    </div>
  );
};
