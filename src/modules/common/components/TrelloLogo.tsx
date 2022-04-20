import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrelloLogo = () => {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => navigate('/boards')}
      style={{ width: '75px', height: '15px' }}
      src='https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif'
      alt='Logo'
    />
  );
};

export default TrelloLogo;
