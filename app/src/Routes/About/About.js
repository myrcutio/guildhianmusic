import React from 'react';
import Typography from '@material-ui/core/Typography';
import gazebo from '../../assets/gazebo.png'
import css from './About.module.scss'

export const About = () => (
  <div>
    <img className={css.gazebo} src={gazebo} alt="JSB Gazebo"></img>
    <Typography variant="h6">Composer</Typography>
    
  
    Composer, performer, arranger, theorist, poet, writer, music copyist, music store owner/manager, and university 
    professor emeritus <b>James Scott Balentine</b> (Jim), draws inspiration, like most contemporary, globally-connected musicians, 
    from a dizzying array of music, art, literature, dance, technology, and other ethnic and cultural phenomena. 
    His music is fun, eclectic and interesting to play, intriguing to the listener, and crafted in a personal language 
    reflecting ethnic dance, jazz and folk idioms, tonal as well as atonal and serial techniques.
  
    <p>
    His catalog includes music written for soloists and ensembles from many parts of the United States, Belgium, France, 
    and the UK, all incorporating the personality, technique, and musical character of the performers in some way. Jim's 
    fondness for wordplay and poetry finds its way into many of his works as phonetic motifs, alliterative allusions in 
    esoteric expressions, metronome markings, a poetic prologue, or formal musical structures designed around names, prosody, 
    and other linguistic elements that infuse his music with a sense of intrigue and theater, from dramatic to playful. His 
    music has been performed on every continent save Antarctica (he’s hoping for an opportunity to someday write for solo whistler 
    at McMurdo), and is the recipient of awards, commissions and grants from the Barlow Endowment, the American Music Center, 
    the Krost Foundation, the Artist Foundation of San Antonio, Cactus Pear Music Festival, ASCAP, the Opera Guild of San Antonio, 
    the College Band Director's National Association, Musical Offerings, King William Winds, San Antonio Chamber Choir, Hemisphere 
    Quartet, Trio Con Brio, Duo Con Fuoco, KUT-FM radio, Claribel Clarinet Choir, soloists Robert Walzel (clarinet), Matthew Dunne 
    (guitar), Ron Wilkins (trombone), Richard Smith (piano), and Roger Steptoe (piano). His music is published by American Concert 
    Editions (the American Composers Alliance), Cimarron Music, Keiser Southern Music (distributed by Hal Leonard), and Guildhian 
    Music. Recordings of his music are on Navona, Albany, Lisem, and CPMF labels, as well as university and conservatory recordings 
    in the US and Europe.
    </p>

    <Typography variant="h6">Arranger & Orchestrator</Typography>
    <p>
      A prolific arranger as well as composer, Jim's orchestral arrangements have been
      performed by the San Antonio Symphony, Phoenix Symphony, Mid-Texas Symphony, Flint Symphony, 
      and others, and his big band charts are included in the libraries of professional and university
      jazz ensembles across the United States. His arrangements for solo violin and orchestra of 
      Gershwin's <i>Porgy and Bess</i>, commissioned and recorded by violinist Daniel Kobialka, are available on
      Lisem Recordings.
    </p>

    <Typography variant="h6">Performer</Typography>
    <p>
      A professional performer since high school, Jim is a freelance musician,
      primarily as a woodwind performer (clarinets, saxophones and flutes) in
      big bands, pit orchestras, and an eclectic mix of orchestra, bands and
      ensembles that includes performances with the Columbia Philharmonic
      Orchestra, Spoleto Festival Left Bank Jazz Ensemble, San Antonio Symphony,
      the Houston Jazz Orchestra, Ray Charles, Mel Torme, Maureen McGovern, Bob
      Hope, Tom Jones, John Denver, Johnny Mathis, Tony Orlando and Dawn, Diane
      Schuur, Jimmy Dorsey Band, Ed Gerlach Orchestra, Ringling Bros-Barnum and 
      Bailey Circus, and national tours of Broadway shows including{' '}
      <i>
        Annie Get Your Gun, The Producers, Guys and Dolls, Little Shop of
        Horrors
      </i>
      , and many, many others.
    </p>

    <Typography variant="h6">Music Educator</Typography>
    <p>
      Professor Emeritus of Music Theory and Composition at the University of
      Texas at San Antonio, Jim taught courses in music composition, theory,
      jazz studies, and music marketing prior to his retirement in 2017. He holds bachelor and master
      degrees from the University of South Carolina, and the Doctor of Musical
      Arts in Composition from the University of Texas at Austin. His
      composition teachers included Hunter Johnson, Gordon (Dick) Goodwin,
      Samuel Douglas, Eugene Kurtz, Barton McLean and Karl Korte. He has also
      served as Director of Jazz Studies at Sam Houston State University in
      Huntsville, Texas, and was founder and owner of One Music Square, a full
      line retail music store.
    </p>

    <Typography variant="h6">Personal</Typography>
    <p>
      Born in Fort Worth, Texas in 1947, the son of a career Air Force officer, Jim was raised in Paris, France; 
      Montgomery, Alabama; Tachikawa, Japan, and has since lived (from as little as six weeks to ten years) in such 
      diverse locations as Winnipeg (Canada), Edinburgh (Scotland), and Zurich (Switzerland); Midwest City (Oklahoma), 
      Columbia (South Carolina), San Francisco, Houston, Austin, and Huntsville (Texas), and currently resides in the 
      hill country near San Antonio. He is a pretty good cook, a passable tennis player (pun intended), and an interested student 
      of the foibles of human nature, particularly his own - people are a puzzle!
    </p>
  </div>
);
