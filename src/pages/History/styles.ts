import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${(props) => props.theme.FONT_XL};
    color: ${(props) => props.theme.GRAY_1};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme.GRAY_6};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.GRAY_1};
      font-size: ${(props) => props.theme.FONT_SM};
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme.GRAY_7};
      border-top: 4px solid ${(props) => props.theme.GRAY_8};
      padding: 1rem;
      font-size: ${(props) => props.theme.FONT_SM};
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "YELLOW_5",
  red: "RED_5",
  green: "GREEN_5",
} as const;

type StatusProps = {
  statusColor: keyof typeof STATUS_COLORS;
};

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
