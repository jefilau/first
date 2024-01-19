import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import Menu from './components/Menu';
import Content from './components/Content';

function Question () {
     

    const [selectedLink, setSelectedLink] = useState(1);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
      
        <div>
            <HeaderNav/>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '25%' }}><Menu selectedLink={selectedLink} onLinkClick={handleLinkClick} /></div>
                <div style={{ flex: '5%' }}></div>
                <div style={{ flex: '70%' }}><Content selectedLink={selectedLink} /></div>
            </div>
        </div>
    );
};

export default Question;
