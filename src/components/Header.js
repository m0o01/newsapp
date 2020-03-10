import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faEnvelope,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { unloadArticle } from "../actions/newsActions";
import { changeRoute } from "../actions/routeActions";

import "./styles/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  static propTypes = {
    article: PropTypes.object,
    unloadArticle: PropTypes.func.isRequired,
    changeRoute: PropTypes.func.isRequired
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  unloadArticle = () => {
    this.props.unloadArticle();
  };

  changeRoute(route) {
    this.unloadArticle();
    this.props.changeRoute(route);
  }

  render() {
    return (
      <div className="header-container">
        <div className="brand">
          {this.props.article ? (
            <Link to="/" className="back-button" onClick={this.unloadArticle}>
              <FontAwesomeIcon size="2x" icon={faArrowLeft} color="#506a8d" />{" "}
            </Link>
          ) : null}
          <p className={"brand-name" + (this.props.article ? " scroll" : "")}>
            {this.props.article ? this.props.article.title : "NewsApp"}
          </p>
        </div>
        <div className="header">
          <Link
            className={
              "header-button" +
              (this.props.route === "news" ? " button-active" : "")
            }
            onClick={this.changeRoute.bind(this, "news")}
            to="/"
          >
            <FontAwesomeIcon
              className="icon"
              icon={faNewspaper}
              size="1x"
              color="#fffff"
            />
            NEWS
          </Link>

          <Link
            className={
              "header-button" +
              (this.props.route === "mail" ? " button-active" : "")
            }
            onClick={this.changeRoute.bind(this, "mail")}
            to="/mail"
          >
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelope}
              size="1x"
              color="#fffff"
            />
            MAIL
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    article: state.news.article,
    route: state.router.route
  };
};

export default connect(mapStateToProps, { unloadArticle, changeRoute })(Header);
