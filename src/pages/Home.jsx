import '../styles/home.css';
import { useState } from 'react';
import { Layout, Input, Result } from 'antd';
import { Results } from '../components/Results';
import { Loading } from '../components/Loading';

const Home = () => {

  const [isLoading, setLoading] = useState(false);
  const [pincode, setPincode] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  const search = async () => {

    setLoading(true);

    try {
      let response = await fetch(`https://api.zippopotam.us/in/${pincode}`);
      let data = await response.json();

      if (Object.keys(data).length === 0) {
        setResult(null);
        setError(true);
      } else {
        setResult(data);
        setError(false);
      }

    } catch (error) {
      setResult(null);
      setError(true);
    }

    setLoading(false);
  }

  return (
    <Layout className='container'>
      <Input.Search
        type='number'
        value={pincode}
        placeholder='Enter Pincode'
        size='large' className='input'
        enterButton="Search"
        disabled={isLoading}
        onSearch={search}
        onChange={({ target }) => setPincode(target.value)}
      />

      {
        isLoading ? (
          <Loading />
        ) : (
          result ? (
            <Results data={result} />
          ) : (
            error && (
              <Result
                status="warning"
                title="There are some problems while processing the pincode"
              />
            )
          )
        )
      }

    </Layout>
  );
}

export default Home;
