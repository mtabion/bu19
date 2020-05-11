import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider.js';

export default function Profile() {
    const { 
        user: {
            username
        },
        issues
    } = useContext(UserContext);

    return (
        <div className="profile-wrapper">Profile</div>
    )
}