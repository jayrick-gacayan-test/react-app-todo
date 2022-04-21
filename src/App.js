import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.style/basic.css';
import './custom.style/classname.css';
import './custom.style/media.query.css';

// custom pages
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactusPage from './components/pages/ContactusPage';
import ErrorPage from './components/error/ErrorPage';
import TodoContainer from './components/Todo/functionBased/TodoContainer';

// layouts
import NavigationMain from './components/layout/NavigationMain';

const App = () => {
  return (
    <>
      <NavigationMain />
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="/contact" element={ <ContactusPage /> } />
        <Route path="/todo" element={ <TodoContainer />} />
        <Route path="*" element={ <ErrorPage /> }/>
      </Routes>
    </>
  );
}

export default App;
