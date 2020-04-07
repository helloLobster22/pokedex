import React from 'react';
import './index.css';
import Ability from '../Ability';

const AbilitesCard = (props) => {
    return (
        <div className="abilitiesCard">
            <Ability />
            <Ability />
            <Ability />
            <Ability />
            <Ability />
            <Ability />
        </div>
    )

}

export default AbilitesCard;