import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import './styles/NewsCard.css'


class SearchHelper extends Component {
    render(){
        return (
            <div className="news-loader">
                <FontAwesomeIcon icon={faSearch} size="3x" style={{margin: '10px'}}/>
                <p>Please, enter a vaild search query in the top left input box.</p>
            </div>
        )
    }
}

export default connect(() => ({}), {})(SearchHelper)