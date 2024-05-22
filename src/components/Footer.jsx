import React from "react";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

export const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className=" flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            distinctio.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[29px] text-white mb-4">
                {footerLink.title}
              </h4>
              <ul className="list-none">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer
                      ${footerLink.links.length - 1 ? "mb-4" : "mb-0"}
                    `}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-between mt-8 items-center border-t-[1px] border-t-[#3f3r45] pt-8">
        <p className="font-poppins font-normal text-center text-[18px] leading-[29px] text-white mb-4">
          2024 Hoobank. &copy; All rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((socialIcon, index) => (
            <img
              src={socialIcon.icon}
              alt="icon"
              key={socialIcon.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer hover:text-secondary ${
                index !== socialIcon.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
