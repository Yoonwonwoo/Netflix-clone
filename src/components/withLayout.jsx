import React from 'react';
import Banner from './Banner'



const withLayout = Page => {
    return () => (
        <div>
            <Banner></Banner>
            <Page/>
        </div>
    );
};

export default withLayout;