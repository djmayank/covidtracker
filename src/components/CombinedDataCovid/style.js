import { css } from "@emotion/css";

export const outerWrapper = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 140px;
`;

export const cardClass = css`
  width: calc(32% - 90px);
  padding: 20px 30px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 32px;
  @media (max-width: 860px) {
    width: 100%;
  }
`;

export const titleClass = css`
  font-size: 25px;
  line-height: 40px;
`;

export const subtitleClass = css`
  ${titleClass}
  display: flex;
  justify-content: center;
`;

export const perClass = css`
  font-size: 15px;
  font-weight: bold;
  margin-left: 6px;
`;

export const activeClass = css`
  color: #002c56;
  background: #a5c9fd;
  background: linear-gradient(
    to bottom,
    #a5c9fd 0%,
    #a5c9fd 6%,
    #a7cbff 8%,
    #a5c9fd 11%,
    #a7cbff 11%,
    #aacffc 28%,
    #b0d5ff 44%,
    #b0d6fb 48%,
    #b5dbff 62%,
    #b4dbfc 62%,
    #b8dffe 75%,
    #bae2fb 79%,
    #bce4fe 91%,
    #bde6fa 96%,
    #bee7fd 100%
  );
`;
export const dischargedClass = css`
  color: #015b25;
  background: #9ae69c;
  background: linear-gradient(
    to bottom,
    #9ae69c 0%,
    #9ce999 5%,
    #9cea9e 6%,
    #9cea9e 6%,
    #a0e99a 10%,
    #a3eb95 24%,
    #adee92 36%,
    #adee90 40%,
    #b3ef8f 45%,
    #b0f08f 46%,
    #b4f18a 50%,
    #b7f18d 51%,
    #b6f08a 53%,
    #baf18b 58%,
    #c4f780 77%,
    #c9f681 86%,
    #ccfa7e 90%,
    #cbf77c 94%,
    #cff87e 96%,
    #cff87e 100%
  );
`;
export const deathClass = css`
  color: #5a0502;
  background: #ff8582;
  background: linear-gradient(
    to bottom,
    #ff8582 0%,
    #fe8685 16%,
    #ff908e 44%,
    #fe908f 53%,
    #ff9692 62%,
    #ff9597 67%,
    #ff9a98 84%,
    #ff9b9b 85%,
    #fe9c9d 91%,
    #ff9e98 96%,
    #ff9d9c 96%,
    #ff9e9d 100%
  );
`;

export const vaccCardWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
  background: linear-gradient(45deg, #036ba0, #22949f);
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  font-size: 2.5rem;

  @media (max-width: 860px) {
    flex-direction: column;
    font-size: 20px;
  }
`;

export const varPerClass = css`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-left: 10px;

  @media (max-width: 860px) {
    margin-top: 8px;
    font-size: 20px;
  }
`;
