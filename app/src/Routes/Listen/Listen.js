import React from 'react';
import Typography from '@material-ui/core/Typography';
import music1 from '../../assets/PortobelloBeach.mp3';
import music2 from '../../assets/AuldReekie.mp3';
import css from './Listening.module.scss'

export const Listen = () => {
  console.log(music1)
  return (
  <div>
    <Typography variant="h4">Listen</Typography>
    
    <div className={css.ListeningSection}>
    <p><i><b>Asking a Shadow to Dance</b></i> - for clarinet, viola & piano</p>
    <p>Robert Walzel, clarinet; Boris Vaynor, viola; Steven Glaser, piano; concert in Vilnius, Lithunia in March, 2020.
    </p>
    <iframe width="360" height="210" src="https://www.youtube.com/embed/H5aLtGlgIrY?t=2310" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p><i><b>In a Bright Room</b></i> - for clarinet & bassoon</p>
    <p>Robert Walzel, clarinet; Scott Walzel, bassoon.
    </p>
    <iframe width="360" height="210" src="https://www.youtube.com/embed/sXzy5hUSqh0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    
    <p><i><b>Portobello Beach</b></i> - double concerto for clarinet, bassoon, and chamber orchestra</p>
    <p>Robert Walzel, clarinet; Eric Stomberg, bassoon; Moravian Philharmonic Orchestra.
    <audio controls>
      <source src={music1} type="audio/mpeg"></source>
    </audio>
    <audio controls>
      <source src={music2} type="audio/mpeg"></source>
        Your browser does not support the audio element.
    </audio>
    </p>
  </div>
)}