import React, { Component } from "react";
import './SideBar.css';
import miaImmagine from "./immagine.jpg";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Row>
                    <nav id="page-content-wrapper">
                        <div className="sidebar">
                            <div className="sidebar-content text-center">
                                <div className="sidebarImg text-center">
                                    <img src={miaImmagine} className="img-circle" />
                                    <h3>Antonietta Brenga</h3></div>
                            </div>
                            <div className="sidebar-wrapper">
                                <ul className="sidebar-nav">
                                    <li>
                                        <Button>About me</Button>
                                    </li>
                                    <li>
                                        <Button>my works</Button>
                                    </li>
                                    <li>
                                        <Button>Contact me</Button>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </Row>
           
        );
    }
}


export default Sidebar;