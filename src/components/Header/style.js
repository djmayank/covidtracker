import { css } from "@emotion/css";

export const headerClass = css`
  background: #606060;
  box-shadow: 0px -3px 22px -2px grey;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: calc(100% - 32px);
  top: 0;
  z-index: 10;
`;

export const logoClass = css`
  height: 40px;
  width: 40px;
`;

export const titleWrapper = css`
  display: flex;
  align-items: center;
`;

export const logoTitleClass = css`
  margin-left: 16px;
  color: white;
  font-size: 20px;
`;

export const dataSourceClass = css`
  color: white;
  font-size: 14px;
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
