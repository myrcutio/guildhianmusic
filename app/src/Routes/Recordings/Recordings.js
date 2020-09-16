import React from 'react';
import Typography from '@material-ui/core/Typography';
import cdimage1 from '../../assets/wilddances.jpg'
import cdimage2 from '../../assets/livefivecpmf.jpg'
import cdimage3 from '../../assets/CrossConnection.jpg'
import cdimage4 from '../../assets/Troy1734.jpg'
import cdimage5 from '../../assets/k4kcd.png'
import cdimage6 from '../../assets/PorgyandBess.jpg'
import cdimage7 from '../../assets/RiverWordsCover.jpg'
import cdimage8 from '../../assets/RememberingFriends.png'
import cdimage9 from '../../assets/RedPoppy.png'
import css from './Recordings.module.scss'

export const Recordings = () => (
  <div>
    <Typography variant="h6" align="center">
      CD and downloads are available through Amazon, iTunes, and other music marketplaces.
    </Typography>
    <figure className={css.figure}>
        <img src={cdimage1} alt="Nine Wild Exotic Dances"></img>
        <figcaption><a href="https://www.amazon.com/Exotic-Dances-Steven-Clarinet-Consort/dp/B00TJ6TIAE">Albany Records Troy 1547</a></figcaption>
    </figure>

    <figure className={css.figure}>
        <img src={cdimage3} alt="Cross Connection"></img>
        <figcaption><a href="https://music.apple.com/us/album/wolking-balentine-cross-connection/608515694">Navona Records NV 5903</a></figcaption>
    </figure>

    <figure className={css.figure}>
        <img src={cdimage5} alt="Klassics for Kids"></img>
        <figcaption><a href="https://www.amazon.com/Klassics-Cactus-Music-Festival-Artists/dp/B003DRO1KW">Cactus Pear Music Festival</a></figcaption>
    </figure>

    <figure className={css.figure}>
        <img src={cdimage4} alt="Love Comes in at the Eye"></img>
        <figcaption><a href="https://music.apple.com/us/album/loves-comes-in-at-the-eye/1400295276">Albany Records Troy 1734</a></figcaption>
    </figure>

    <figure className={css.figure}>
        <img src={cdimage2} alt="Live Five CPMF"></img>
        <figcaption><a href="https://www.amazon.com/Live-First-Cactus-Music-Festival/dp/B0052GTGPW">Cactus Pear Music Festival</a></figcaption>
    </figure>
    
    <figure className={css.figure}>
        <img src={cdimage6} alt="Porgy and Bess"></img>
        <figcaption><a href="https://music.apple.com/us/album/porgy-and-bess-rendered-by-daniel-kobialka/1244874450">Lisem Records</a></figcaption>
    </figure>

    <figure className={css.figure}>
        <img src={cdimage7} alt="River of Words"></img>
        <figcaption><a href="https://www.clearnote.net/River-Of-Words-with-Bruce-Cain-and-David-Asbury--CD_p_379.html">Clear Note 74602</a></figcaption>
    </figure>

    <figure className={css.figure}>
        <img src={cdimage9} alt="Red Poppy and the Yellow Rose"></img>
        <figcaption><a href="guildhianmusic">Conservatory an Zee</a></figcaption>
    </figure> 

    <figure className={css.figure}>
        <img src={cdimage8} alt="Remembering Friends"></img>
        <figcaption><a href="guildhianmusic">Guildhian Records</a></figcaption>
    </figure>
    
    <Typography align="center">
    <i>Red Poppy and the Yellow Rose</i> and <i>Remembering Friends</i> are available exclusively through <a href="guildhianmusic"><i>Guildhian Music</i></a>. 
    </Typography>
  </div>
);