import React, {Component} from 'react'
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types'
import './styles/NewsCard.css'


class ArticleImage extends Component {
    constructor(props){
        super(props)
        this.state = {
            imageLoaded: false
        }
    }

    static propTypes = {
        src: PropTypes.string.isRequired,
    }

    imageCallBack = () => {
        this.setState({imageLoaded: true})
    }

    render(){
        return (
            <div className="image">
              {(!this.state.imageLoaded)? <Spinner className="spinner" color="light" /> : null}
                <img className="image" onLoad={this.imageCallBack} onError={this.imageCallBack} alt="Article" src={this.props.src}/> 
           </div>
        )
    }
}

export default ArticleImage;