import React from 'react';
import Cookme from './cookme';
import List from './list';
import Recipe from './recipes';

const CookmeMain = () => {
    return(
        <div className="container">
        <div className="row">
            <Cookme />
            <List />
            <Recipe />
            </div>
        </div>

    )
}

export default CookmeMain;