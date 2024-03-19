import React from "react";
import styles from "./index.module.css";

type PropTypes = {
  name: string;
  onClick: React.MouseEventHandler;
};

export const Ticket = (props: PropTypes) => {
  const { name, onClick } = props;
  return (
    <button className={styles.card} onClick={onClick} type="button">
      <p>{name}</p>
    </button>
  );
};
