import React from 'react';
import Typography from '@material-ui/core/Typography';
import cdimage1 from '../../assets/wilddances.jpg'
import cdimage2 from '../../assets/livefivecpmf.jpg'
import cdimage3 from '../../assets/CrossConnection.jpg'
import css from './Recordings.module.scss'

export const Recordings = () => (
  <div>
    <Typography variant="h6" align="center">
      CD and downloads are available through Amazon, iTunes, and other music marketplaces.
    </Typography>
    
    <img className={css.cdimages} src={cdimage1} alt="Nine Wild Exotic Dances"></img>
    <img className={css.cdimages} src={cdimage3} alt="Cross Connection"></img>
    <img className={css.cdimages} src={cdimage2} alt="Live Five CPMF"></img>
    

    <Typography align="center">
    ...and more... Music by James Scott Balentine is also available through Keiser Southern Music and Cimarron Music Press.
    Theater, electronic, jazz ensemble, and educational arrangements are available through <i>Guildhian Music</i>. Visit the <i>Music</i> Page for more information
    </Typography>
  </div>
);