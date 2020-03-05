import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faUndo } from '@fortawesome/free-solid-svg-icons'

import './styles/NewsCard.css'

class NewsLoadError extends Component {

    reload = () => {
        this.props.reload()
    }

    render(){
        return (
            <div className="news-loader">
                <FontAwesomeIcon icon={faExclamationCircle} size="2x" style={{margin: '5px'}}/>
                <p>Load failed... Please, check your internet connection</p>
                <button className="btn btn-secondary" onClick={this.reload}>
                <FontAwesomeIcon icon={faUndo} size="1x" style={{marginRight: "5px"}}/>
                    Reload
                </button>
            </div>
        )
    }
}

export default NewsLoadError