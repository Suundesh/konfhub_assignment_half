import React from 'react';
import useFetchData from '../hooks/useFetchData';
import '../style/About.css';
import SimpleTabs from './Tab';
import Header from './Header';

const About = () => {
  const { data, loading, error } = useFetchData();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <Header />
      <div className="about">
        <div>
          {data.event_poster_url && (
            <img src={data.event_poster_url} alt="Event Poster" className='poster-img' />
          )}
        </div>
        <SimpleTabs />
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </div>

  );
};

export default About;
