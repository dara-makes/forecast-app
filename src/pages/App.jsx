import React, { Component } from 'react';
import CardList from '../components/CardList';
import TileGrid from '../components/TileGrid';
import { YahooWeatherUrl } from '../data/constants';
import '../app/_base.scss';
import './App.scss';

class App extends Component {
  /**
   * State
   *
   * @type {{
   *    cards: Array,
   *    isNavActive: boolean,
   *    activeColor: String,
   * }}
   */
  state = {
    cards: [],
    isNavActive: false,
    activeColor: 'color-coral'
  };

  toggleNav = () => {
    this.setState({
      isNavActive: !this.state.isNavActive
    });
  };

  selectTileColor = className => {
    this.setState({
      activeColor: className
    });
  };

  fetchWeatherAPI() {
    fetch(YahooWeatherUrl)
      .then(response => response.json())
      .then(formattedResponse => {
        const item = formattedResponse.query.results.channel.item;
        this.setState({
          cards: [item.condition, ...item.forecast.slice(1, 5)]
        });
      })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.fetchWeatherAPI();
  }

  render() {
    const appStyles = `app-container ${this.state.activeColor}`;
    const navStyles = this.state.isNavActive ? 'nav-container open' : 'nav-container';

    return (
      <section>
        <nav className={navStyles}>
          <div>
            <h3>Select a City</h3>
            <div className="search-box">
              New York, NY
            </div>
          </div>
          <div>
            <h3>Theme</h3>
            <TileGrid onClick={this.selectTileColor} />
          </div>
          <div className="nav-icon-close" onClick={this.toggleNav}>+</div>
        </nav>

        <div className="nav-icon-open" onClick={this.toggleNav}>+</div>
        <div className={appStyles}>
          <CardList data={this.state.cards} />
        </div>
      </section>
    );
  }
}
export default App;
