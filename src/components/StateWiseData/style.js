import { css } from "@emotion/css";

export const table = css`
  margin: auto;
`;

export const tableWrapper = css`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const thead = css`
  position: sticky;
  top: 111px;
`;

export const mobileClass = css`
  @media (max-width: 860px) {
    display: none;
  }
`;

export const containerWrapper = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 60px 0;
`;

export const trClass = css`
  border: 1px solid #ddd;
  padding: 8px;
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`;

export const tdClass = css`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const thClass = css`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #0f70ce;
  color: white;
`;

export const headerClass = css`
  font-size: 3em;
  font-weight: 900;
  background: linear-gradient(to bottom right, #a7cfdf 0%, #23538a 73%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const sortClass = css`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const sortSelectClass = css`
  padding: 6px;
  background: #b6d3ef;
  border: none;
  border-radius: 6px;
  color: #002c56;
  outline: none;
  width: 150px;
`;

export const sortWrapper = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #cbcbcb;
  margin-top: 20px;
  padding: 16px;
  width: 150px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 7px -4px grey;
`;
