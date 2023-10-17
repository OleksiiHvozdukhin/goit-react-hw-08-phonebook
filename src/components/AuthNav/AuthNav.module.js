import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  margin-right: 5px;

  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;

  &:nth-child(1) {
    color: #b928cb;
    font-weight: 500;
  }

  &:hover {
    background: #03e9f4;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }

  &:nth-child(1):hover {
    background: #b928cb;
    box-shadow: 0 0 5px #b928cb, 0 0 25px #b928cb, 0 0 50px #b928cb,
      0 0 100px #b928cb;
  }

  & span {
    position: absolute;
    display: block;
  }
  & span:nth-child(1) {
    top: 0px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 4s linear infinite;
    animation-delay: 2s;

    @keyframes btn-anim1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }
  }
  &:nth-child(1) span:nth-child(1) {
    background: linear-gradient(90deg, transparent, #b928cb);
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 4s linear infinite;
    animation-delay: 3.5s;

    @keyframes btn-anim2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }
  }
  &:nth-child(1) span:nth-child(2) {
    background: linear-gradient(180deg, transparent, #b928cb);
  }
  & span:nth-child(3) {
    bottom: 0px;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 4s linear infinite;
    animation-delay: 2s;

    @keyframes btn-anim3 {
      0% {
        right: -100%;
      }
      50%,
      100% {
        right: 100%;
      }
    }
  }

  &:nth-child(1) span:nth-child(3) {
    background: linear-gradient(270deg, transparent, #b928cb);
  }
  & span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 4s linear infinite;
    animation-delay: 3.5s;

    @keyframes btn-anim4 {
      0% {
        bottom: -100%;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  }

  &:nth-child(1) span:nth-child(4) {
    background: linear-gradient(360deg, transparent, #b928cb);
  }
`;
