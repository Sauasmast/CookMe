import React from 'react';

const List = () => {
    return(
    <div className="col s4"> 
        <div className="card white">
        <div className="card-content">
            <ul className="collection with-header">
            <li className="collection-header"><h5>Your Ingredients </h5></li>
            <li className="collection-item"><div>Potato<a href="#!" className="secondary-content"><i className="material-icons">Remove</i></a></div></li>
            <li className="collection-item"><div>Potato<a href="#!" className="secondary-content"><i className="material-icons">Remove</i></a></div></li>
            <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">Remove</i></a></div></li>
            <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">Remove</i></a></div></li>
            </ul>
        </div>

        <div className="card-action">
          <a href="#" className="black-text"> Search </a>
          <a href="#" className="black-text"> Clear </a>
        </div>
      </div>
    </div>
    )
}

export default List;
