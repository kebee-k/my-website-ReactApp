import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faTelegram,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import "../sytle/follow.css";
import { Col, Row } from "react-bootstrap";

export default class follow extends Component {
  render() {
    return (
        <div className="social-container">
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/Computer-and-It-solution-software-101549121871563"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/learnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.twitter.com/jamesqquick"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="skype social"
        >
          <FontAwesomeIcon icon={faSkype} size="2x" />
        </a>
        <a
          href="https://www.telegrma.com/c/jamesqquick"
          className="telegram social"
        >
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <hr />
        <div className="follow">
         <h6>
         <a href="#jhh">
        
            Copyright ©{new Date().getFullYear()}
          </a>
          {"      "}
          <a href="#jhh">Software clicker </a>
          {"      "}
          <a href="#jhh"> All Rights Reserved </a>
          {"      "}
         </h6>
        </div>
     </div>
    );
  }
}
