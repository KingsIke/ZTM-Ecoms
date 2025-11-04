import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
    color: ${({ $isDark }) => ($isDark ? "gold" : "black")};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ $isDark }) => ($isDark ? "#ffd700" : "#555")};
  }
`;


export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 15px;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme, checked }) => (checked ? "#2196f3" : "#ccc")};
  transition: 0.3s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
    transform: ${({ checked }) => (checked ? "translateX(18px)" : "none")};
  }
`;

export const ModeLabel = styled.span`
  color: inherit;
  font-size: 14px;
  user-select: none;
`;
