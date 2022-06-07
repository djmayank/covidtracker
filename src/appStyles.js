import { css } from "@emotion/css";

export const appStyles = css`
  font-family: sans-serif;
`;

export const containerClass = css`
  margin: auto;
  width: 90%;
  margin-top: 80px;
`;

export const errorWrapper = css`
  margin-top: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const errorTextClass = css`
  font-size: 22px;
`;
export const errorButtonClass = css`
  margin: 16px 0;
  padding: 16px;
  background: #606060;
  width: 80px;
  color: white;
  border-radius: 4px;
  :hover {
    background: #8d8888;
    cursor: pointer;
    box-shadow: 0px 0px 7px -1px grey;
  }
`;
