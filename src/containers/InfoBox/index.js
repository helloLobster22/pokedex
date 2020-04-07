import React from 'react';
import './index.css';
import Pokemon from '../../components/Pokemon';
import AbilitesCard from '../../components/abilitiesCard';
import Pokeball from '../../components/Pokeball';

const InfoBox = (props) => {
    return (
        <div>
            <Pokemon />
            <AbilitesCard />
            <Pokeball />

        </div>
    )

}

export default InfoBox;
