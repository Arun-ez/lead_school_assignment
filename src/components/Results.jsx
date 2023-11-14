import '../styles/results.css';
import { Layout, Flex } from 'antd';
import { Card } from './Card';

const Results = ({ data: { 'post code': postCode, country, places } }) => {

    return (
        <Layout className='result'>

            <Flex align='center' vertical className='head'>
                <h1> {country} </h1>
                <h2> {postCode} </h2>
            </Flex>

            <div className='places_grid'>
                {places.map((place, index) => (<Card place={place} key={index} />))}
            </div>


        </Layout>
    )
}

export { Results }
