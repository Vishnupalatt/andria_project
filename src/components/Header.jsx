import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavDropdown, NavbarCollapse } from 'react-bootstrap';




function Header() {
    return (
        // <Navbar style={{ background: '#13118c' }} data-bs-theme="dark">
        //     <Container>
        //         <NavbarCollapse id="basic-navbar-nav">

        //             <Navbar.Brand href="#home"><i class="fa-solid fa-file-contract"></i><span style={{ margin: '10px' }}>BIDD WINNER</span></Navbar.Brand>
        //             <Nav className="me-auto">
        //                 <h6><Nav.Link className='me-5 text-white mt-3' href="#Dashboard" style={{ marginLeft: '100px' }}>Dashboard</Nav.Link></h6>
        //                 <h6><Nav.Link className='me-5 text-white mt-3' href="#Jobs">Jobs</Nav.Link></h6>
        //                 <h6> <Nav.Link className='me-5 text-white mt-3' href="#calender">calender</Nav.Link></h6>
        //                 <h6><Nav.Link className='me-5 text-white mt-3' href="#Catalog">Cost Catalog</Nav.Link></h6>
        //                 <h6><Nav.Link className='me-5 text-white mt-3' href="#Database">Database</Nav.Link></h6>
        //                 <h6><Nav.Link className='me-5 text-white mt-3' href="#Tutorial">Tutorial</Nav.Link></h6>
        //                 
        //                     <DropdownButton style={{ backgroundColor: '#13118c', marginLeft: '90px' }} id="dropdown-basic-button" title="Profile">
        //                         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //                         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //                         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //                     </DropdownButton></Nav.Link>
        //                 <Nav.Link><i class="fa-solid fa-bell fa-2xl"></i></Nav.Link>
        //             </Nav>
        //         </NavbarCollapse>
        //     </Container>
        // </Navbar>
        <Navbar style={{ background: '#13118c' }} expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <i class="fa-solid fa-crown fa-2x me-3" style={{ color: 'white' }}></i>
                <div className='border border-white me-3'>
                    <Navbar.Brand href="#home">
                        <span style={{ color: 'white' }} className='fw-bold  ms-3'> BIDD WINNER</span></Navbar.Brand>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <h6 ><Nav.Link className='mx-4 text-white mt-2' href="#Dashboard">Dashboard</Nav.Link></h6>
                        <h6><Nav.Link className='mx-4 text-white mt-2' href="#Jobs">Jobs</Nav.Link></h6>
                        <h6> <Nav.Link className='mx-4 text-white mt-2' href="#calender">calender</Nav.Link></h6>
                        <h6><Nav.Link className='mx-4 text-white mt-2' href="#Catalog">Cost Catalog</Nav.Link></h6>
                        <h6><Nav.Link className='mx-4 text-white mt-2' href="#Database">Database</Nav.Link></h6>
                        <h6><Nav.Link className='mx-4 text-white mt-2' href="#Tutorial">Tutorials</Nav.Link></h6>

                        <Dropdown className='mx-5 mt-2'>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" style={{ background: '#13118c' }} >
                                Vishnu P
                            </Dropdown.Toggle>
                            {/* 
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" active>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                                </Dropdown.Menu> */}
                        </Dropdown>

                        <i class="fa-regular fa-bell fa-2x mx-3 mt-2" style={{ color: '#fff' }}></i>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header