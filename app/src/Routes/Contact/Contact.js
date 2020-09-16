import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Contact = () => (
    <div>
        <Typography variant="h6">Contact Information</Typography>
        <div>
            <ul>
                <li>Personal email <a href="mailto:jbalenti@gmail.com">James Scott Balentine</a>
                </li>
                <li>or via USPS:</li>
            <div>23860 Iron Horse</div>
            <div>San Antonio, TX 78255</div>
            </ul>
        </div>
        <Typography variant="h6">Publisher Links:</Typography>
    <div>
            <ul>
                <li>American Concert Editions (ASCAP) - <a href="https://composers.com/composers/james-scott-balentine">American Composers Alliance</a></li>
                <li>Keiser Southern Music: <a href="https://www.halleonard.com/search/search.action?keywords=3776281">Hal Leonard - (distributor)</a></li>
                <li>Cimarron Music Press: <a href="https://www.cimarronmusic.com">Cimarron Music</a></li>
            </ul>
        </div>
       
    </div>
);
