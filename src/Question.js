import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
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
                <div style={{ flex: '21%' }}><Menu selectedLink={selectedLink} onLinkClick={handleLinkClick} /></div>
                <div style={{ flex: '4%' }}></div>
                <div style={{ flex: '75%' }}><Content selectedLink={selectedLink} /></div>
            </div>
            <Footer/>
        </div>
    );
};

export default Question;
