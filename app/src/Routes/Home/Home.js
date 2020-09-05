import React from 'react';
import Typography from '@material-ui/core/Typography';
import musicimage1 from '../../assets/fragments.png'
import musicimage2 from '../../assets/desfleurs.png'
import musicimage3 from '../../assets/tbgg.png'
import musicimage4 from '../../assets/askingshadow.png'
import musicimage5 from '../../assets/ninedances.png'
import musicimage6 from '../../assets/fivespirituals.png'
import musicimage7 from '../../assets/steptoe.png'
import musicimage8 from '../../assets/strangeloops.png'
import css from './Home.module.scss'

export const Home = () => (
  <div className={css.pagewrapper}>
    <Typography variant="h6" align="center">
      Now available through <i>American Concert Editions (ASCAP)</i>;
      American Composers Alliance - composers.com  
    </Typography>
    <div>
      <img className={css.musicimages} src={musicimage1} alt="Fragments"></img>
      <img className={css.musicimages} src={musicimage2} alt="Il y a des Fleurs"></img>
      <img className={css.musicimages} src={musicimage3} alt="Three Billy Goats Gruff"></img>
      <img className={css.musicimages} src={musicimage4} alt="Asking a Shadow to Dance"></img>
      <img className={css.musicimages} src={musicimage5} alt="Nine Wild Exotic Dances"></img>
      <img className={css.musicimages} src={musicimage6} alt="Five Spirituals"></img>
      <img className={css.musicimages} src={musicimage7} alt="Piano Sonata 2 Steptoe"></img>
      <img className={css.musicimages} src={musicimage8} alt="Strange Loops"></img>
    </div>
    <div className={css.pagefooter}>
      <Typography align="center">
      ...and more... Music by James Scott Balentine is also available through Keiser Southern Music and Cimarron Music Press.
      Theater, electronic, jazz ensemble, and educational arrangements are available through <i>Guildhian Music</i>. Visit the <i>Music</i> Page for more information
      </Typography>
    </div>
  </div>
);
