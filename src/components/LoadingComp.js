import React from 'react';

const LoadingComp = () => {
    return (
        <section className='section loading-comp'>
            <h3 className='title loading-comp__text'>Loading articles...</h3>
            <progress className="progress is-small loading-comp__progress" max="100">15%</progress>
        </section>
    )
}

LoadingComp.displayName = 'LoadingComp';

export default LoadingComp;