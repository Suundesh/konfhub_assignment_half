import React from 'react';
import useFetchData from '../hooks/useFetchData';
import LanguageIcon from '@mui/icons-material/Language';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import '../style/OrganiserDetails.css';

const OrganiserDetails = () => {
  const { data, error, isLoading } = useFetchData(); 

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p className='hosted'>HOSTED BY</p>
      <div className="organizer-box">
        <div className="organizer-header">
          {data.organiser_image_url ? (
            <img src={data.organiser_image_url} alt="Organizer" className="organizer-img" />
          ) : (
            <div className="organizer-img-placeholder">No Image Available</div>
          )}
          <h2 className="organizer-name">{data.organiser_name}</h2>
        </div>
        <div className="organizer-info">
          <p className='organizer-description'>{data.organiser_info}</p>
          <p className='contact-us'>Contact Us On</p>
          <div className="social-links">
            {data.organiser_website && (
              <p>
                <a href={data.organiser_website} target="_blank" rel="noopener noreferrer">
                  <LanguageIcon />
                </a>
              </p>
            )}
            {data.organiser_phone && (
              <p>
                <a href={`tel:${data.organiser_phone}`}>
                  <Phone />
                </a>
              </p>
            )}
            {data.organiser_email && (
              <p>
                <a href={`mailto:${data.organiser_email}`}>
                  <Email />
                </a>
              </p>
            )}
            {data.organizer_facebook_url && (
              <a href={data.organizer_facebook_url} target="_blank" rel="noopener noreferrer">
                <FacebookIcon className='organizer-icon' />
              </a>
            )}
            {data.organizer_twitter_url && (
              <a href={data.organizer_twitter_url} target="_blank" rel="noopener noreferrer">
                <Twitter className='organizer-icon' />
              </a>
            )}
            {data.organizer_linkedin_url && (
              <a href={data.organizer_linkedin_url} target="_blank" rel="noopener noreferrer">
                <LinkedIn className='organizer-icon' />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganiserDetails;
