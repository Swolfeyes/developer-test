import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, url, urlToImage, description, }) => {
    return (
        <figure className='box article' style={{background: `url(${urlToImage})`, backgroundSize: 'cover'}}>           
            <figcaption className='article__body'>
                <h1 className='title is-2'>{title}</h1>
                <h4 className='subtitle is-4'>{author}</h4>
                <div className='content' className='article__body__description'><p>{description}</p></div>
                <a className='article__body__link' href={url} target='_blank'></a>
            </figcaption>
        </figure>
    )
}

Article.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
}

Article.displayName = 'Article';

export default Article;
