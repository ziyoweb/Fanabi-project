import React from "react";
// import { IoCloseOutline } from "react-icons/io";
import {
  SidebarWrap,
  Languages,
  CloseIconWrap,
  SidebarParent,
  SidebarInside,
} from "./style";

const Sidebar = ({ change, onToggle }) => {
  return (
    <SidebarParent changes={change}>
      <SidebarWrap>
        <SidebarWrap.Header>
          <Languages>
            <Languages.Item onClick={onToggle}>Ру</Languages.Item>
            <Languages.Item onClick={onToggle}>En</Languages.Item>
          </Languages>
          <CloseIconWrap onClick={onToggle}>
            <CloseIconWrap.Icon />
          </CloseIconWrap>
        </SidebarWrap.Header>
        <SidebarWrap.Body>
          <SidebarWrap.Title>Menyu</SidebarWrap.Title>
          <SidebarWrap.Link to="/наши-работы" onClick={onToggle}>
            Bizning ishlar
          </SidebarWrap.Link>
          <SidebarWrap.Link to="/услуги_и_цены" onClick={onToggle}>
            Xizmatlar va narxlar
          </SidebarWrap.Link>
          <SidebarWrap.Link to="/о_студии" onClick={onToggle}>
            Biz haqimizda
          </SidebarWrap.Link>
          <SidebarWrap.Link to="/контакты" onClick={onToggle}>
            Kontaktlar
          </SidebarWrap.Link>
        </SidebarWrap.Body>
      </SidebarWrap>
      <SidebarInside onClick={onToggle} />
    </SidebarParent>
  );
};

export default Sidebar;
