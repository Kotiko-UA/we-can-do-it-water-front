import styled from "styled-components";

export const Backdrop = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  -webkit-backdrop-filter: blur(11px);
  backdrop-filter: blur(11px);
  z-index: 999;
`;

export const Modal = styled.div`
 position: absolute;
  padding: 32px 24px;
  width: 280px;
  height: 560px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  overflow-y: auto;
  transform: translate(-50%, -50%) scale(1);
  background-color: #fff;
`;