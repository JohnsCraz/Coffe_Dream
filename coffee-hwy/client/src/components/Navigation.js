import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return ( 
        <div className = "navigation" >
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        Coffee Highway
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aira-expanded="false"
                        aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class={'nav-item ${props.location.path === "/"?"active":""}'}>
                                <Link class="nav-link" to="/">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class={'nav-item ${props.location.path === "/"?"active":""}'}>
                                <Link class="nav-link" to="/about">
                                    About
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class={'nav-item ${props.location.path === "/"?"active":""}'}>
                                <Link class="nav-link" to="/receipe">
                                    Receipe
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class={'nav-item ${props.location.path === "/"?"active":""}'}>
                                <Link class="nav-link" to="/forum">
                                    Forum
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
    );
}

export default withRouter(Navigation);