import { css, keyframes } from "@emotion/css";

const hintloading = keyframes`
  0% {
    opacity: 0.5;
  }
  50%  {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const shimmer = css`
  background-color: #babbbc;
  animation: ${hintloading} 2s ease-in-out 0s infinite reverse;
  border: 1px solid white;
`;

export const placeholdersWrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 140px;
`;

export const cardPlaceholder = css`
  width: calc(32% - 90px);
  height: 120px;
  padding: 0 30px px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 32px;
  ${shimmer};
  @media (max-width: 860px) {
    width: 100%;
  }
`;

export const bigCardPlaceholder = css`
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  ${shimmer};
  @media (max-width: 860px) {
    height: 75px;
  }
`;

export const tableOuterWrapper = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 60px 0px;
`;
export const titlePlaceholder = css`
  height: 55px;
  width: 500px;
  ${shimmer};
  @media (max-width: 860px) {
    width: 60%;
  }
`;
export const tablesortPlaceholder = css`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const sortPlaceholder = css`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 16px;
  width: 150px;
  margin-bottom: 20px;
  height: 62px;
  ${shimmer};
`;
export const tablePlaceholder = css`
  width: 60%;
  height: 1000px;
  ${shimmer};
  @media (max-width: 860px) {
    width: 90%;
  }
`;
