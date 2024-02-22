import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { heroes } from '../data/heroes';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {heroes.map(heroes => (
                    <HeroCard 
                        key={heroes.id} 
                        {...heroes}
                    
                    />
                ))}
            </div>
        </>

    )
}
