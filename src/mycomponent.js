import Inferno from 'inferno';
import { Component } from 'inferno-component';
import Item from './item';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [] };
  }

  componentDidMount() {
    fetch('/slack-list-ja/teams.json')
      .then(res => res.json())
      .then(teams => this.setState({ teams }))
      .catch(ex => console.log('parsing failed', ex));
  }

  renderItems() {
    return this.state.teams.map(team => {
      return (
        <div className="column">
          <Item
             name={ team.name }
             url={ team.url }
             description={ team.description }
             url={ team.tag }
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-content">
            <div className="container">
              <h1 className="title">
                <img src="./logo.png" className="logo" />
              </h1>
              <h2 className="subtitle">
                A handpicked selection of top Slack communities
              </h2>
              <p className="control">
                <input className="input is-medium" type="text" placeholder="Find a team" />
              </p>
            </div>
          </div>
        </section>
        <div className="items">
          <div className="columns">
            { this.renderItems() }
          </div>
        </div>
      </div>
    );
  }
}
