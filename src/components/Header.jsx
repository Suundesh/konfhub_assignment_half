import React from 'react';
import useFetchData from '../hooks/useFetchData';
import '../style/Header.css';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const { data, loading, error } = useFetchData();

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <div className="navbar">
            <div className="navbar-content">
                <img src={data.navbar_icon} alt="Navbar Icon" className="navbar-icon" />
                <div className="navbar-right">
                    <IconButton edge="end" color="inherit">
                        <a  href="https://dev-accounts.konfhub.com/login" target="_blank">
                        <AccountCircleIcon fontSize="large"  className="icon"/>
                        </a>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Header;
