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
    <Typography align="center">
      Welcome to my humble online musical abode. 
      Take a look around and you can find information about my compositions and 
      arrangements, recordings of my music, 
      a bit of poetry and other writing about stuff I think about when I'm 
      not playing or writing music. Have a listen, and if you're interested 
      in performing a piece or two, most of it is now available through <i>American Concert Editions (ASCAP)</i>;
      at the <a href="https://www.composers.com/homesearch?combine=&field_composer_target_id=14433">American Composers Alliance.</a> 
      <p></p>And, for those who are fans of my brother Douglas' music, at the bottom of the Listening page there are a few recordings with Douglas, my brother Bruce, and myself. 
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
      ...and more... Music by James Scott Balentine is available through the <a href="https://composers.com/composers/james-scott-balentine"><i>American Composers Alliance,</i></a> <a href="https://www.halleonard.com/search/search.action?keywords=james+balentine&dt=item#products"><i>Keiser Southern Music,</i></a> and <a href="https://www.cimarronmusic.com/catalogsearch/result/?q=Balentine"><i>Cimarron Music Press.</i></a> Theater, electronic, jazz ensemble, and educational arrangements are available through <a href="https://www.jamesbalentine.com/guildhianmusic"> <i>Guildhian Music.</i></a> Visit the Music Page for more information.
      </Typography>
    </div>
  </div>
);
