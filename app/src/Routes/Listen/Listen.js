import React from 'react';
import Typography from '@material-ui/core/Typography';
import music1 from '../../assets/BillyGoatsGruffFlemish.mp3';
import music2 from '../../assets/Tempest3.mp3';
import music3 from '../../assets/Tempest4.mp3';
import music4 from '../../assets/Tempest5.mp3';
import cdimageDB from '../../assets/NightsAreRare.png';
import music5 from '../../assets/Monkeyshines.mp3';
import music6 from '../../assets/ImNotCertain.mp3';
import music7 from '../../assets/Trilogy1.mp3';
import music8 from '../../assets/Trilogy2.mp3';
import music9 from '../../assets/Trilogy3.mp3';
import music10 from '../../assets/PianoSonata1mvt1.mp3';
import music11 from '../../assets/PianoSonata1mvt2.mp3';
import music12 from '../../assets/PianoSonata1mvt3.mp3';
import music13 from '../../assets/OldHouses.mp3';
import music14 from '../../assets/Autumn.mp3';
import music15 from '../../assets/AbovetheDock.mp3';
import music16 from '../../assets/ARiverSinging.mp3';
import css from './Listening.module.scss'

export const Listen = () => {
  console.log(music1)
  return (
  <div>
    <Typography variant="h4">Listen</Typography>
    
    <div className={css.ListeningVideo}>
    <p><i><b>Asking a Shadow to Dance</b></i> - for clarinet, viola & piano</p>
    <iframe width="360" height="210" title="Asking a Shadow to Dance" src="https://www.youtube.com/embed/H5aLtGlgIrY?start=2310" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className={css.ListeningVideo}>
    <p><i><b>The Three Billy Goats Gruff (opening excerpt)</b></i></p>
    <iframe width="360" height="210" title="Billy Goats Gruff" src="https://www.youtube.com/embed/DUijYNKOKyY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
      <p><i><b>Three Billy Goats Gruff - </b></i>in Flemish, at the Conservatory aan Zee, Ostend, Belgium</p>
      <audio controls>
      <source src={music1} type="audio/mpeg"></source>
    </audio>
    </div>

    <div className={css.ListeningVideo}>
    <p><i><b>Dún Èideann Blogh - II. Portobello Beach</b></i> - double concerto for clarinet & bassoon</p>
    <p>Robert Walzel, clarinet; Eric Stromberg, bassoon.
    </p>
    <iframe width="360" height="210" title="Portobello Beach" src="https://www.youtube.com/embed/oLc1ePZeeB0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className={css.ListeningVideo}>
    <p><i><b>Nine Wild Exotic Dances - IX. Nineria</b></i> - for clarinet & piano</p>
    <p>Robert Walzel, clarinet; Steven Glaser, piano.
    </p>
    <iframe width="360" height="210" title="Nineria" src="https://www.youtube.com/embed/-OOkNKasho0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className={css.ListeningAudio}>
      <p><i><b>The Tempest Songs</b></i> - Linda Poetschke, soprano</p> 3. Where the Bee Sucks
      <audio controls>
      <source src={music2} type="audio/mpeg"></source>
    </audio>
      4. Caliban's Dream
      <audio controls>
      <source src={music3} type="audio/mpeg"></source>
    </audio>
    5. Our Revels Now Are Ended
      <audio controls>
      <source src={music4} type="audio/mpeg"></source>
    </audio>
    </div>

    <div className={css.ListeningAudio}>
      <Typography variant="h6">Chamber Choir</Typography>
      <p><i><b>Fragments of Time and Place</b></i> - San Antonio Chamber Choir</p> 1. Old Houses
      <audio controls>
      <source src={music13} type="audio/mpeg"></source>
    </audio>
    2. Autumn
    <audio controls>
      <source src={music14} type="audio/mpeg"></source>
    </audio>
    3. Above the Dock
    <audio controls>
      <source src={music15} type="audio/mpeg"></source>
    </audio>
    4. It is a river, singing
    <audio controls>
      <source src={music16} type="audio/mpeg"></source>
    </audio>
</div>

    <div className={css.ListeningAudio}>
      <Typography variant="h6">Piano Solo</Typography>
      <p><i><b>A Trilogy for Friends</b></i> - Kasandra Keeling, piano</p> 1. Pavane for Kathy
      <audio controls>
      <source src={music7} type="audio/mpeg"></source>
    </audio>
    2. Remembering Reed
    <audio controls>
      <source src={music8} type="audio/mpeg"></source>
    </audio>
    3. Capriccio and Chaconne for J.K.
    <audio controls>
      <source src={music9} type="audio/mpeg"></source>
    </audio>
</div>
    <div className={css.ListeningAudio}>
    <p><i><b>Piano Sonata No. 1 (Smith)</b></i> - Steven H. Smith, piano</p> 1. Furiously
      <audio controls>
      <source src={music10} type="audio/mpeg"></source>
    </audio>
    2. Peaceful, ethereal
    <audio controls>
      <source src={music11} type="audio/mpeg"></source>
    </audio>
    3. Insistent, with aggression
    <audio controls>
      <source src={music12} type="audio/mpeg"></source>
    </audio>  
</div>
    <div className={css.ListeningAudio}>
    <p><i><b>Piano Sonata No. 2 (Steptoe)</b></i> - Roger Steptoe, piano</p> 1. Theme and Three Variations 2. Meditation 3. Invention & Fantasy
    <iframe width="360" height="210" title="Pno2Steptoe" src="https://www.youtube.com/embed/m6hjjWczIjY?start=2010" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

    <div className={css.ListeningAudio}>
      <Typography variant="h6">Arrangements</Typography>
      
      <p></p><i><b>Daniel Kobialka Renders Porgy & Bess</b></i> 
      <p></p>Arrangements by James Scott Balentine
    <iframe width="360" height="210" title="BessKobialka" src="https://www.youtube.com/embed/CDqlIu2se0E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className={css.ListeningAudio}>
    <p></p><i><b>Douglas Balentine - Monkeyshines, from Nights Like This Are Rare</b></i> Jim Balentine, arr., clarinet, flutes - Bruce Balentine, trombone
    <img src={cdimageDB} Alt="Nights Like This are Rare"></img>
    <audio controls>
      <source src={music5} type="audio/mpeg"></source>
    </audio></div>

    <div className={css.ListeningAudio}>
    <p></p><i><b>I'm Not Certain - Douglas Balentine, vocal, piano; Jim Balentine, alto sax</b></i>
    <audio controls>
      <source src={music6} type="audio/mpeg"></source>
    </audio></div>

  </div>
)}