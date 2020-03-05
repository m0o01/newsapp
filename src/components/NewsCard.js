import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Card, CardTitle, CardText } from 'reactstrap';
import {Link} from 'react-router-dom'

import {loadArticle} from '../actions/newsActions'

import ArticleImage from './ArticleImage'
import './styles/NewsCard.css'

function calculateTime(date){
  const now = new Date()
  let seconds = (now.getTime() - date.getTime()) / 1000
  if(seconds < 60)
    return "Updated 1 minute ago"
  else
  {
    let minutes = Math.ceil(seconds/60)
    if(minutes < 60)
      return `Updated ${minutes} minute${minutes === 1 ? "" : "s"} ago`
    else
    {
      let hours = Math.ceil(minutes/60)
      if(hours < 24)
        return `Updated ${hours} hour${hours === 1 ? "" : "s"} ago`
      else {
        let days = Math.ceil(hours/24)
        return `Updated ${days} hour${days === 1 ? "" : "s"} ago`
      }
    }
  }
}

class NewsCard extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired,
    loadArticle: PropTypes.func.isRequired
  }

  loadArticle(index){
    this.props.loadArticle(index)
  }

    render () {
        return (
          <Link to={{
            pathname: `/article/${this.props.article.index}`
          }} onClick={this.loadArticle.bind(this, this.props.article.index)}>
            <div className="newscard-container">
              <Card className="newscard-container" inverse>
                <ArticleImage className="image" src={this.props.article.urlToImage || "https://reactjs.org/logo-og.png"}/>
                <div className="newscard-container" style={{pointerEvents: "none"}}>
                  <CardTitle className="newscard-title">{this.props.article.title}</CardTitle>
                  <CardText>
                    <small className="newscard-time">
                    {calculateTime(new Date(this.props.article.publishedAt))}
                    </small>
                  </CardText>
                </div>
              </Card>
            </div>
          </Link>
        );
    }
}


export default connect(() => ({}), {loadArticle})(NewsCard)