import Inferno from 'inferno';
import { Component } from 'inferno-component';
import Item from './item';
import includes from 'lodash.includes';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [
      {
        "name": "slack-list-ja",
        "url": "http://hoge",
        "description": "team description",
        "tag": ["game", "programing", "front"]
      },
      {
        "name": "slack-list-ja2",
        "url": "http://fuga",
        "description": "team description2",
        "tag": ["fuga"]
      }
    ]
, search: '' };
  }

  componentDidMount() {
    fetch('/slack-list-ja/teams.json')
      .then(res => res.json())
      .then(teams => this.setState({ teams }))
      .catch(ex => console.log('parsing failed', ex));
  }

  onKeyDown({ target: { value } }) {
    this.setState({ search: value });
  }

  renderItems() {
    return this.state.teams.map(team => {
      if (!JSON.stringify(team).match(new RegExp(this.state.search))) return <span />;
      return (
        <div className="column">
          <Item
             key={ team.name }
             name={ team.name }
             url={ team.url }
             description={ team.description }
             tag={ team.tag }
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <section className="hero animated fadeIn">
          <div className="hero-content">
            <div className="container">
              <h1 className="title">
                <img src="./logo.png" className="logo" />
              </h1>
              <h2 className="subtitle">
                A handpicked selection of top Slack communities in japan
              </h2>
              <p className="control">
                <input
                   onKeyDown={ ::this.onKeyDown }
                   className="input is-medium"
                   type="text"
                   placeholder="Find a team" />
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
