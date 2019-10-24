import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Hero from './components/Hero';
import Profile from './components/Profile';
import { getImage1, getImage2, getImage3, getImage4, getImage5, getImage6, getImage7, getImage8, getImage9, getGifs, generatePics } from './service/api-helper';

// let apiKey = "4rK3fduciaheLDga1gdCJwMdxz7hWweZqBSlLnoH";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: [],
      gifs: [],
      date: "",
      singleImg: ''
    }
  }

  async componentDidMount() {
    const img01 = await getImage1();
    const img02 = await getImage2();
    const img03 = await getImage3();
    const img04 = await getImage4();
    const img05 = await getImage5();
    const img06 = await getImage6();
    const img07 = await getImage7();
    const img08 = await getImage8();
    const img09 = await getImage9();

    const img = [img01, img02, img03, img04, img05, img06, img07, img08, img09];
    const gifs = await getGifs();
    // console.log(gifs)
    this.setState({
      img: img,
      gifs: gifs
    })

  }

  handleChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const singleImg = await generatePics(this.state.date);
    this.setState({
      singleImg
    })
    this.props.history.push(`/${this.state.date}`)
  }
  
  goToHome = () => {
    this.setState({
      singleImg: ''
    })
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="app">
        {/* <Route exact path="/" render={(=>(<Home />))}/> */}
        <Header gifs={this.state.gifs} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Hero />
        <main>
          <Route exact path='/' render={() => <Home img={this.state.img} gifs={this.state.gifs} />} />
          <Route path='/:title' render={(props) => <Profile singleImg={this.state.singleImg} img={this.state.img.filter(i => i.title === props.match.params.title)} goToHome={this.goToHome} />} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
