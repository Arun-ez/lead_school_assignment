import '../styles/card.css';
import { Card as AntCard } from 'antd';

const Card = ({ place: { 'place name': name, state, longitude } }) => {
    return (
        <AntCard
            title={state}
            className='card'
        >
            <h2> {name} </h2>
            <p> Longitude: {longitude} </p>

        </AntCard>
    )
}

export { Card }
