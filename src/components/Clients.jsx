import React from "react";
import { clients } from "../constants";
import styles from "../style";

export const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>
        {clients.map((client) => (
          <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="images" className="sm:w-[192px] w-[100px] object-contain cursor-pointer opacity-90 hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
};
