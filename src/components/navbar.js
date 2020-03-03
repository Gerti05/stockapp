import React from 'react'
import { Navbar, Container } from "react-bootstrap";
import "../styles/navbar.css"

export default function navbar() {
    return (
        
            <Navbar bg="dark" variant="dark">
                <Container>
    <Navbar.Brand href="#home">
      <div className="color">StockEZ.com</div>
    </Navbar.Brand>
    </Container>
  </Navbar>
        
    )
}
