import React from "react";
import { footerWrapper, mayankClass, linkClass } from "./style";

export default () => {
  return (
    <div className={footerWrapper}>
      <div className={mayankClass}>Made with ♥ by Mayank © 2022-23</div>
      <div className={linkClass}>
        Connect me at{" "}
        <a
          style={{ color: "white" }}
          target='_blank'
          href='https://mayankkhanna.in'
        >
          https://mayankkhanna.in
        </a>
      </div>
    </div>
  );
};
