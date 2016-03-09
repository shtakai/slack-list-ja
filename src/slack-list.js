import React, { Component } from 'react';
import Item from './item';

require('whatwg-fetch');

export default class SlackList extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [], search: '' };
  }

  componentDidMount() {
    fetch('/slack-list-ja/teams.json')
      .then(res => res.json())
      .then(teams => this.setState({ teams }))
      .catch(e => console.log('parsing failed', e));
  }

  onChange({ target: { value } }) {
    this.setState({ search: value });
  }

  renderItems() {
    return this.state.teams.map((team) => {
      if (!JSON.stringify(team).match(new RegExp(this.state.search))) return null;
      return (
        <div className="column" key={ team.url }>
          <Item
            key={ team.url }
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
                  onChange={ ::this.onChange }
                  className="input is-medium"
                  type="text"
                  placeholder="Find a team"
                />
              </p>
            </div>
          </div>
        </section>
        <div className="items">
          <div className="columns is-multiline ">
            { this.renderItems() }
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content is-centered">
              <p>
                Created by <strong>bokuweb</strong>. inspired <a href="http://www.slacklist.info/">slack list</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
