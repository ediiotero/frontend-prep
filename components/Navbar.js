import React from "react";
import Nav from "react-bootstrap/Nav";

const NavItem = ({id,title}) => {
  return (
    <Nav.Item>
      <Nav.Link className="text-white " href={`#${id}`}>{title}</Nav.Link>
    </Nav.Item>
  );
};

function Navbar({list}) {
  return (
    <Nav className="justify-content-center bg-dark p-3 fixed-top" activeKey="/home">
      {list.map(item => <NavItem key={item.id} id={item.id} title={item.title}/>)}
    </Nav>
  );
}

export default Navbar;
