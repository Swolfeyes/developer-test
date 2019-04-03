import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Articles from './Articles';
import LoadingComp from './LoadingComp';
import ErrorComp from './ErrorComp';

import { connect } from 'react-redux';
import { fetchArticles, loadMoreArticles } from '../store/actions';


const mapStateToProps = state => {
    return {
        status: state.getRequestStatus.status,
        articles: state.fetchData,
        errorMessage: state.getRequestStatus.error,
        page: state.loadNextPage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: page => dispatch(fetchArticles(page)),
        loadMoreArticles: page => dispatch(loadMoreArticles(page))
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArticles(this.props.page);
    }

    handleClick() {
        this.props.fetchArticles(this.props.page);
    }

    render() {
        const { status, errorMessage, page } = this.props;

        return (
            <div className='app section'>
                <div className='container'>
                    <Header />
                    {
                    status === 'loading' && page <= 1 && <LoadingComp />
                    }
                    {
                        status === 'failed' &&  <ErrorComp onButtonClick={() => this.handleClick()} message={errorMessage} />
                    }
                    {
                        status === 'success' &&  <Articles />
                    }
                </div>
            </div>
        );
    }
}

App.propTypes = {
    status: PropTypes.string,
    articles: PropTypes.array,
    fetchArticles: PropTypes.func,
    page: PropTypes.number,  
    errorMessage: PropTypes.string  
}

App.displayName = 'App';

export default connect(mapStateToProps, mapDispatchToProps)(App);