import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsOutLinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedICon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Header() {
    return (
            <div className="header">
                <div className="header__left">
                    <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=125&h=125" 
                    alt="logo" />
                    <div className="header__input">
                        <SearchIcon />
                        <input type="text" placeholder="Search.."/>
                    </div>
                </div>
                <div className="header__center">
                    <div className="header__option header__option--active">
                        <HomeIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <FlagIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <SubscriptionsOutLinedIcon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <StorefrontOutlinedICon fontSize="large" />
                    </div>
                    <div className="header__option">
                        <SupervisedUserCircleIcon fontSize="large" />
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__info">
                        <Avatar src />
                        <h4>Vaibhav Mittal</h4>
                    </div>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
            )
}

export default Header
