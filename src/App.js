import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import About from './pages/About';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import blogData from './pages/data/blogData';
import Posts from './pages/Posts';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      blogData
    };
  }

  render(){
    return (
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            
            <Route exact path="/">
              <Home />
            </Route>
  
            <Route path="/blog/:slug">
              <BlogPost data={this.state.blogData} />
            </Route>

            <Route path="/posts">
              <Posts data={this.state.blogData} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
  
}

// export default App;
