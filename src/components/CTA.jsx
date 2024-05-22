import React from "react";
import styles from "../style";
import { Button } from "./Button";

export const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>Let's try our services now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste amet
          doloremque deleniti cumque vero.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-10 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};
