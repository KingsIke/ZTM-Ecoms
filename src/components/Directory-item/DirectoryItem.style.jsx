import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const BackgroundImage = styled(Link)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 3px solid gold;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  backdrop-filter: blur(2px);
  transition: opacity 0.3s;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
  .dark-mode & {
    background-color: rgba(0, 0, 0, 0.7);
    border-color: #444;

    h2 {
      color: gold;
    }
    p {
      color: gold;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }

    &.large {
      height: 380px;
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }
  }

  .dark-mode & {
    box-shadow: 0 4px 12px rgba(249, 224, 3, 0.73);
  }

  @media (max-width: 634px) {
    min-width: 100%;
    margin: 8px;
  }
  @media (min-width: 635px) and (max-width: 769px) {
    min-width: 30%;
    height: 240px;
    margin: 0 7.5px 15px;

    &.large {
      height: 380px;
    }

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
