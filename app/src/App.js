import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { navigation } from './nav';
import { Home } from 'Routes/Home';
import { Works } from 'Routes/Works';
import { Listen } from 'Routes/Listen';
import { Recordings } from 'Routes/Recordings';
import { NewsEvents } from 'Routes/NewsEvents';
import { Writings } from 'Routes/Writings';
import { GuildhianMusic } from 'Routes/GuildhianMusic';
import { About } from 'Routes/About';
import { Contact } from 'Routes/Contact';
import css from './App.module.scss';

const App = () => {
  const menuAnchor = useRef(null);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <BrowserRouter>
      <nav className={css.navbar}>
        <div className={css.mobileNav}>
          <IconButton
            aria-label={showMobileNav ? 'close menu' : 'menu'}
            ref={menuAnchor}
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {showMobileNav ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Popover
            open={showMobileNav}
            onClose={() => setShowMobileNav(false)}
            anchorEl={menuAnchor.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
          >
            <div className={css.mobileNavMain}>
              {navigation.map(({ to, label, exact }) => (
                <NavLink
                  key={`mobile-nav-${label}`}
                  to={to}
                  className={classNames(css.navItem, css.mobile)}
                  activeClassName={css.navActive}
                  onClick={() => setShowMobileNav(false)}
                  exact={exact}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </Popover>
        </div>
        <div className={css.tag}>
          James
          <br />
          Scott
          <br />
          Balentine
        </div>
        <div className={css.nav}>
          <div className={css.navMain}>
            {navigation.map(({ to, label, exact }) => (
              <NavLink
                key={`nav-${label}`}
                to={to}
                className={css.navItem}
                activeClassName={css.navActive}
                exact={exact}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <div className={css.main}>
        <div className={css.banner} />
        <div className={css.contentWrap}>
          <div className={css.content}>
            <div className={css.intro}>
              <div className={css.name}>James Scott Balentine</div>
              <span className={css.tagline}>
                Composer · Performer · Music Educator
              </span>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/listen" component={Listen} />
              <Route exact path="/recordings" component={Recordings} />
              <Route exact path="/events" component={NewsEvents} />
              <Route exact path="/writings" component={Writings} />
              <Route exact path="/guildhianmusic" component={GuildhianMusic} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <div className={css.copyright}>
              &copy;{new Date().getFullYear()} James Scott Balentine
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
