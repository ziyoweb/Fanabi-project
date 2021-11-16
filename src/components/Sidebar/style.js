import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

export const SidebarParent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  /* left: 0; */
  left: ${({ changes }) => (!changes ? "-100%" : "0")};
  z-index: 10;
  opacity: (${(changes) => (!changes ? "0" : "1")});
  transition: all 0.2s linear;
`;

export const SidebarInside = styled.div`
  width: 20%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
`;

export const SidebarWrap = styled.div`
  width: 80%;
  height: 100%;
  background-color: #222a32;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;

  /* transform: (${({ changes }) =>
    changes ? "translateX(-100%)" : "translateX(0%)"}); */
`;

SidebarWrap.Header = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Languages = styled.div`
  display: flex;
  align-items: center;
`;

Languages.Item = styled.div`
  color: #fff;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const CloseIconWrap = styled.div``;

CloseIconWrap.Icon = styled(MdClose)`
  color: #fff;
  font-size: 28px;
  cursor: pointer;
`;

SidebarWrap.Body = styled.div``;
SidebarWrap.Title = styled.p`
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
  color: #fff;
  text-align: center;
  padding: 15px 20px;
  font-family: "Montserrat", sans-serif;
`;
SidebarWrap.Link = styled(NavLink)`
  color: #fff;
  padding: 15px 20px;
  text-decoration: none;
  display: block;
`;
