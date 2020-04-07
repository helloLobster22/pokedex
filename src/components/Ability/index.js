import React from 'react';
import './index.css';

const Ability = (props) => {
    return (
        <div>
            <div className="abilityName">Moc</div>
            <div className="progressBar" role="progressBar" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )

}

export default Ability;