import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadMoreArticles, fetchArticles } from '../store/actions';

import Article from './Article';

const mapStateToProps = state => {
    return {
        articles: state.fetchData,
        status: state.getRequestStatus.status,
        page: state.loadNextPage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadMoreArticles: page => dispatch(loadMoreArticles(page)),
        fetchArticles: page => dispatch(fetchArticles(page))
    }
}

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.handleWindowScroll = this.handleWindowScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleWindowScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll);
    }

    handleWindowScroll() {
        const { status, articles } = this.props;

        if (status === 'failed' || status === 'loading' || articles.length >= 100 ) {
            return;
        }

        if ( window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)  {
            this.props.loadMoreArticles(this.props.page + 1);
            this.props.fetchArticles(this.props.page);
        }
    }

    render() {
        const { articles, status, page } = this.props;

        return (
            <section className='section'>
                <div className='container'>
                {
                    status === 'failed' && <div className='notification is-danger'>Failed to load more articles</div>
                }
                {
                articles.map((item, index) => {
                        return (
                            <Article 
                                key={`art-${page}-${index}`}
                                title={item.title}
                                author={item.author}
                                url={item.url}
                                urlToImage={item.urlToImage}
                                description={item.description}
                            />
                        )
                    })
                }
                {
                    articles.length >= 100 && <div className='notification is-warning'>There are no more articles to load</div>
                }
                </div>
            </section>
        )
    }
}

Articles.propTypes = {
    status: PropTypes.string,
    articles: PropTypes.array,
    fetchArticles: PropTypes.func,
    loadMoreArticles: PropTypes.func,
    page: PropTypes.number,    
}

Articles.displayName = 'Articles';

export default connect(mapStateToProps, mapDispatchToProps)(Articles);