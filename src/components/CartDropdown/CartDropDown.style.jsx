import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from '../Button/Button.style.jsx'


export const CartDropContainer = styled.div`
  position: absolute;
  width: 280px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  top: 80px;
  right: 10px;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  animation: slideDown 0.3s ease-out;

  @media (max-width: 425px) {
    width: calc(100vw - 32px);
    left: 16px;
    right: 16px;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
    
 ${BaseButton}, 
 ${GoogleSignInButton}, 
 ${InvertedButton} {
    margin-top:auto;
  }
`;
export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
`;