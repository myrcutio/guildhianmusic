import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>James Scott Balentine</h2>
          <h4>Composer - Performer - Music Educator</h4>
        </header>
        <section>
          <p>
            Composer by character and performer by temperament, James Scott Balentine (Jim to those who know him) is
            as complex as his music; that is, moderately enigmatic yet engaging. Jim’s compositions are fun and
            interesting to play, intriguing to the listener, and crafted in a personal language influenced by ethnic
            dance, jazz and folk idioms, tonal as well as atonal and serial techniques.
          </p>
          <p>
            His catalog includes music written for soloists and ensembles from many parts of the United States,
            Belgium, France, and the UK, all incorporating the personality, technique, and musical character of the
            performers in some way. Jim’s fondness for wordplay and poetry finds its way into many of his works as
            phonetic motifs, alliterative program notes, a poetic prologue, or formal musical structures designed
            around names, prosody, and other linguistic elements that infuse his music with a sense of theater, from
            dramatic to playful. He is the recipient of awards, commissions and grants from the Barlow Endowment, the
            American Music Center, the Krost Foundation, the Artist Foundation of San Antonio, Cactus Pear Music
            Festival, ASCAP, the Opera Guild of San Antonio, the College Band Director's National Association, Musical
            Offerings, King William Winds, Hemisphere Quartet, Trio Con Brio, Duo Con Fuoco, KUT-FM radio, Claribel
            Clarinet Choir, soloists Robert Walzel (clarinet), Matthew Dunne (guitar), Ron Wilkins (trombone), Richard
            Smith (piano), and Roger Steptoe (piano). His music is published by Cimarron Music, Hal Leonard (Southern
            Music), and Guildhian Music.
          </p>

          <div style={{"text-align": "center"}}>Arranger</div>
          <p>A prolific arranger as well as composer, Jim’s arrangements have been performed by the San Antonio</p>
          <p>Symphony, Phoenix Symphony, Mid-Texas Symphony, and others, and his big band charts are included in the
            libraries of professional and university jazz ensembles across the United States. His arrangements for
            solo violin and orchestra of Gershwin's <i>Porgy and Bess</i>, commissioned and recorded by violinist
            Daniel Kobialka, were released summer of 2017 on Lisem Recordings.</p>

          <div style={{"text-align": "center"}}>Performer</div>
          <p>A professional performer since high school, Jim is a freelance musician, primarily as a woodwind
            performer (clarinets, saxophones and flutes) in big bands, pit orchestras, and an eclectic mix of
            orchestra, bands and ensembles that includes performances with the Columbia Philharmonic Orchestra,
            Spoleto Festival Left Bank Jazz Ensemble, San Antonio Symphony, the Houston Jazz Orchestra, Ray Charles,
            Mel Torme, Maureen McGovern, Bob Hope, Tom Jones, John Denver, Johnny Mathis, Tony Orlando and Dawn, Diane
            Schuur, Jimmy Dorsey Band, Ringling Bros-Barnum and Bailey Circus, and national tours of Broadway shows
            including <i>Annie Get Your Gun, The Producers, Guys and Dolls, Little Shop of Horrors</i>, and many, many
            others.</p>

          <div style={{"text-align": "center"}}>Music Educator</div>
          <p>Professor Emeritus of Music Theory and Composition at the University of Texas at San Antonio, Jim taught
            courses in music composition, theory, and jazz studies prior to his retirement in 2017. He holds bachelor
            and master degrees from the University of South Carolina, and the Doctor of Musical Arts in Composition
            from the University of Texas at Austin. His composition teachers included Hunter Johnson, Gordon (Dick)
            Goodwin, Samuel Douglas, Eugene Kurtz, Barton McLean and Karl Korte. He has also served as Director of
            Jazz Studies at Sam Houston State University in Huntsville, Texas, and was founder and owner of One Music
            Square, a full line retail music store.</p>

          <div style={{"text-align": "center"}}>Personal</div>

          <p>Born in Fort Worth, Texas in 1947, the son of a career Air Force officer, Jim was raised in Paris,
            France;</p>
          <p>Montgomery, Alabama; Tachikawa, Japan, and has since lived (from as little as six weeks to ten years) in
            such diverse locations as Winnipeg (Canada), Edinburgh (Scotland), and Zurich (Switzerland); Midwest City
            (Oklahoma), Columbia (South Carolina), San Francisco, Houston, Austin, and Huntsville (Texas), and
            currently resides in the hill country near San Antonio.</p>
          <p>He is a certificated private pilot, a pretty good cook, a passable tennis player (pun intended), and a
            great fan of interdisciplinary and adventurous pursuits.</p>
        </section>
        <section>
          <h4>WORKS</h4>
          <div className="catalog-category">Orchestra</div>
          <div className="catalog-title">
            <ul className="bullets">
              <li><span className="works"><a href="details/DunEideannBloghDetails.html" target="_parent">Dùn Èideann Blogh (double concerto for clarinet, bassoon and orchestra)</a></span>
              </li>

              <li><span className="works"><a href="details/TriquetaDetails.html" target="_parent">Triqueta (double concerto for guitar, horn, strings, piano and percussion)</a></span>
              </li>
            </ul>
          </div>

          <div className="catalog-category">Brass &amp; Wind Ensembles</div>
          <div className="catalog-title">
            <ul className="bullets">

              <li><span className="works"><a href="details/RiverDetails.html" target="_parent">the river remembers (brass quintet)</a></span>
              </li>

              <li><span className="works"><a href="details/RedPoppyWindsDetails.html" target="_parent">Red Poppy and the Yellow Rose (wind ensemble)</a></span>
              </li>

              <li><span className="works"><a href="details/ImageDetails.html" target="_parent">The Image of Dreams (SATB Chorus and wind ensemble)</a></span>
              </li>

              <li><span className="works"><a href="details/NaturalLightDetails.html" target="_parent">A Page from the Natural Light (solo trombone and wind ensemble)</a></span>
              </li>

              <li><span className="works"><a href="details/GoodnightDetails.html" target="_parent">Goodnight to the Old Gods (wind ensemble)</a></span>
              </li>

              <li><span className="works"><a href="details/FestiveDetails.html" target="_parent">Festive Celebration (brass ensemble)</a></span>
              </li>

              <li><span className="works"><a href="details/FanfareDetails.html" target="_parent">Fanfare and Fugue (brass ensemble)</a></span>
              </li>

              <li><span className="works"><a href="details/SatchmoDetails.html" target="_parent">Satchmo (brass and percussion)</a></span>
              </li>
            </ul>
          </div>

          <div className="catalog-category">Jazz Ensemble (Big Band)</div>
          <div className="catalog-title">
            <ul className="bullets">

              <li><span className="works"><a href="details/JazzEnsDetails.html"
                                             target="_parent">Cindy, My Love</a></span></li>

              <li><span className="works"><a href="details/JazzEnsDetails.html" target="_parent">Close to Home (Dennis Dotson)</a></span>
              </li>

              <li><span className="works"><a href="details/JazzEnsDetails.html"
                                             target="_parent"> In Donna's Honor</a></span>
              </li>

              <li><span className="works"><a href="details/JazzEnsDetails.html" target="_parent">The Delectable Mountains</a></span>
              </li>

              <li><span className="works"><a href="details/JazzEnsDetails.html" target="_parent">Ich Bin Kaputen Der Jazzchops</a></span>
              </li>

              <li><span className="works"><a href="details/JazzEnsDetails.html" target="_parent">In and Out the Garbage Pail</a></span>
              </li>

              <li><span className="works"><a href="details/JazzEnsDetails.html"
                                             target="_parent">Nice 'tis, As Is</a></span>
              </li>

              <li><span className="works"><a href="details/JazzEnsDetails.html" target="_parent">Elixir</a></span>
              </li>
            </ul>
          </div>

          <div className="catalog-category">Clarinet Ensembles</div>
          <div className="catalog-title">
            <ul className="bullets">

              <li><span className="works"><a href="details/RedPoppyClarDetails.html" target="_parent">Red Poppy and the Yellow Rose (large clarinet choir)</a></span>
              </li>

              <li><span className="works"><a href="details/TootDetails.html" target="_parent">A Toot in Ninesia (clarinet sextet)</a></span>
              </li>

              <li><span className="works"><a href="details/MonkDetails.html" target="_parent">Monk, through a Glass Darkly (clarinet sextet)</a></span>
              </li>

              <li><span className="works"><a href="details/ThreeSpiritualsDetails.html" target="_parent">3 Spirituals (clarinet sextet)</a></span>
              </li>

              <li><span className="works"><a href="details/GhostDetails.html" target="_parent">The Ghost of Eric Dolphy (clarinet sextet)</a></span>
              </li>
            </ul>
          </div>

          <div className="catalog-category">Jazz Meets Classical Ensembles</div>
          <div className="catalog-title">
            <ul className="bullets">

              <li><span className="works"><a href="details/FleursDetails.html"
                                             target="_parent">Il y a des Fleurs</a></span>
              </li>

              <li><span className="works"><a href="details/BillsShadowDetails.html"
                                             target="_parent">Bill's Shadow</a></span>
              </li>

              <li><span className="works"><a href="details/BlackstickDetails.html" target="_parent">Double Blackstick Dance</a></span>
              </li>

              <li><span className="works"><a href="details/HomageDetails.html"
                                             target="_parent">Homage a Dave</a></span></li>

              <li><span className="works"><a href="details/RecollectionDetails.html"
                                             target="_parent">Recollection</a></span>
              </li>

              <li><span className="works"><a href="details/DolphyFantasyDetails.html" target="_parent">Fantasy After Eric Dolphy</a></span>
              </li>
            </ul>
          </div>


          <div className="catalog-category">Solo Instrument and Piano</div>
          <div className="catalog-title">
            <ul className="bullets">
              <li><span className="works"><a href="details/NineDancesDetails.html" target="_parent">Nine Wild Exotic Dances (clarinet and piano)</a></span>
              </li>

              <li><span className="works"><a href="details/StrathspeyDetails.html" target="_parent">March, Strathspey and Reel (clarinet and piano)</a></span>
              </li>

              <li><span className="works"><a href="details/PrayerDetails.html" target="_parent">Prayer and Alleluia (trumpet and piano)</a></span>
              </li>

              <li><span className="works"><a href="details/WiserManDetails.html" target="_parent">A Wiser Man (cello and piano)</a></span>
              </li>

              <li><span className="works"><a href="details/PuddleDetails.html" target="_parent">to be a Puddle (cello and piano)</a></span>
              </li>
            </ul>
          </div>

          <div className="catalog-category">Solo Piano</div>
          <div className="catalog-title">
            <ul className="bullets">
              <li><span className="works"><a href="details/Sonata1Details.html"
                                             target="_parent">Piano Sonata No. 1</a></span></li>

              <li><span className="works"><a href="details/Sonata2Details.html"
                                             target="_parent">Piano Sonata No. 2</a></span></li>

              <li><span className="works"><a href="details/TrilogyDetails.html"
                                             target="_parent">A Trilogy for Friends</a></span></li>
            </ul>
          </div>

          <div className="catalog-category">Voice and Instruments</div>
          <div className="catalog-title">
            <ul className="bullets">

              <li><span className="works"><a href="details/MNVDetails.html"
                                             target="_parent">So Tell Me Elizabeth - <i>from My New Voice</i> (soprano, piano, synthesized voice)</a></span>
              </li>

              <li><span className="works"><a href="details/BillyGoatDetails.html" target="_parent">The Three Billy Goats Gruff (string quintet and narrator)</a></span>
              </li>

              <li><span className="works"><a href="details/TempestDetails.html" target="_parent">The Tempest Songs (soprano, flute, clarinet, cello, piano)</a></span>
              </li>

              <li><span className="works"><a href="details/SpiritualsDetails.html" target="_parent">Five Spirituals (baritone and cello)</a></span>
              </li>

              <li><span className="works"><a href="details/MaskDetails.html" target="_parent">Out from Behind This Mask (baritone and string quartet)</a></span>
              </li>

              <li><span className="works"><a href="details/WaterDetails.html" target="_parent">What Water Says (baritone and guitar)</a></span>
              </li>
            </ul>
          </div>

          <div className="catalog-category">Mixed Ensembles 1-5 players</div>
          <div className="catalog-title">
            <ul className="bullets">

              <li><span className="works"><a href="details/StrangeLoopsDetails.html" target="_parent">Strange Loops (clarinet, bassoon, piano)</a></span>
              </li>

              <li><span className="works"><a href="details/ShadowDetails.html" target="_parent">Asking a Shadow to Dance (clarinet, viola, piano)</a></span>
              </li>

              <li><span className="works"><a href="details/CoinsDetails.html" target="_parent">Les Quatre Coins (flute, oboe, cello, piano)</a></span>
              </li>

              <li><span className="works"><a href="details/CharlieDetails.html" target="_parent">The Charlie Effect (Bb clarinet, bass clarinet, piano)</a></span>
              </li>

              <li><span className="works"><a href="details/FrogDetails.html" target="_parent">Frog and the Golden Ball (woodwind quintet)</a></span>
              </li>

              <li><span className="works"><a href="details/BrightRoomDetails.html" target="_parent">In A Bright Room (clarinet and bassoon)</a></span>
              </li>

              <li><span className="works"><a href="details/SerenataDetails.html" target="_parent">Serenata (flute, english horn, guitar)</a></span>
              </li>

              <li><span className="works"><a href="details/DrawingsDetails.html" target="_parent">Line Drawings (clarinet and marimba)</a></span>
              </li>

              <li><span className="works"><a href="details/DevilsAdviceDetails.html" target="_parent">The Devils Advice to Storytellers (one clarinetist - Eb, Bb, A, and bass)</a></span>
              </li>

              <li><span className="works"><a href="details/LibertyDetails.html" target="_parent">Liberty Bar (2 percussionists multiple percussion)</a></span>
              </li>

              <li><span className="works"><a href="details/GrahamDetails.html" target="_parent">The Graham Trio (clarinet, cello, piano)</a></span>
              </li>
            </ul>
          </div>

          <div className="catalog-category">Choral</div>
          <div className="catalog-title">
            <ul className="bullets">
              <li><span className="works"><a href="details/FragmentsDetails.html"
                                             target="_parent">Fragments of Time &amp; Place (chamber choir, SSATBB, a capella)</a></span>
              </li>
              <li><span className="works"><a href="details/PresentDetails.html" target="_parent">The Present (childrens chorus, SATB choir and piano)</a></span>
              </li>

              <li><span className="works"><a href="details/ImageDetails.html" target="_parent">The Image of Dreams (satb and piano - also with wind ens)</a></span>
              </li>
            </ul>
          </div>


          <div className="catalog-category">Opera and Theater</div>
          <div className="catalog-title">
            <ul className="bullets">

              <li><span className="works"><a href="details/MNVDetails.html" target="_parent">My New Voice - a one act opera </a></span>
              </li>

              <li><span className="works"><a href="details/NavarroDetails.html" target="_parent">Navarro, a children's opera</a></span>
              </li>

              <li><span className="works"><a href="details/FullFrontalDetails.html" target="_parent">Full Frontal Lobes (lecturer, conductor, jazz saxophone, clarinet, strings, jazz rhythm section)</a></span>
              </li>
            </ul>
          </div>
        </section>
      </div>
  );
}

export default App;
