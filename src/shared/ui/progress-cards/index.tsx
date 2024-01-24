import clsx from "clsx";
import styles from "./index.module.css";

type Item = {
  isCorrect: boolean;
  isAnswered: boolean;
};

type PropTypes = {
  items: Item[];
  activeIndex: number;
};

export const ProgressCards = ({ items, activeIndex }: PropTypes) => {
  return <ul className={styles.wrapper}>
    {items.map((i, idx) => {
      return <li className={clsx(styles.item,{
        [styles.item_correct]: i.isCorrect,
        [styles.item_answered]: i.isAnswered,
        [styles.item_active]: idx === activeIndex,
      })} key={idx}></li>;
    })}
  </ul>;
};
