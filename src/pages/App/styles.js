import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #000000;
`;

export const ColumnRank = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 4px;
  flex-wrap: wrap;
  overflow: hidden;
  min-height: 6rem;
  background-color: ${({ isDraggingOver, isList }) =>
    isDraggingOver ? "#131313" : isList ? "#000000" : "#1d1b1b"};
`;

export const ColumnRankContainer = styled.div`
  display: flex;
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  gap: 1rem;
`;

export const ColumnTitle = styled.strong`
  min-width: 150px;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #f5f5f5;

  background-color: ${({ isDraggingOver, isList }) => "red"};
`;

export const Card = styled.div`
  user-select: none;
  width: fit-content;
  padding: 0 2rem;
  border-radius: 8px;
  height: 6rem;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isDragging }) => (isDragging ? "#bbbbbb" : "#f5f5f5")};
`;
