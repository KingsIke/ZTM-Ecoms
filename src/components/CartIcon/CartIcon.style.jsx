import styled from "styled-components";
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s;
    &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 425px) {
    width: 45px;
    height: 45px;
    border:2px solid green;
  }
`;
export const CartIconContainer1 = styled.div`
  width: 50px;
  height: 50px;
  position: sticky;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 425px) {
    width: 45px;
    height: 45px;
    border:2px solid green;
  }
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 10px;
  color: gold;
  ${'' /* background: #e91e63; */}
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShoppingIcons = styled(ShoppingIcon)`
  width: 28px;
  height: 28px;
  fill: var(--text);

  &.fly {
    animation: fly 0.8s ease-out;
  }

  @keyframes fly {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.3); }
    100% { transform: translateY(0) scale(1); }
  }
`;

