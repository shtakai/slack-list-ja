import Inferno from 'inferno';
import { Component } from 'inferno-component';
import Item from './item';
import includes from 'lodash.includes';

export default class SlackList extends Component {
  constructor(props) {
    super(props);
    this.state = { teams:[
      {
        "name": "リモートワーカー",
        "url": "https://remote-workers-jp.herokuapp.com/",
        "description": "リモートワーカーが知見交換とか雑談するための Slack Team ",
        "tag": ["Work"]
      },
      {
        "name": "electron-jp",
        "url": "https://electron-jp-slackin.herokuapp.com/",
        "description": "Electronの日本ユーザがチャットできる場",
        "tag": ["Electron", "JavaScript"]
      },
      {
        "name": "JAWS-UG",
        "url": "http://jaws-ug.jp/jaws-ug-slack/",
        "description": "JAWS-UGではオープンのコミュニティの運営を議論するために、slackのチームを用意しています。",
        "tag": ["AWS"]
      },
      {
        "name": "Siv3D",
        "url": "http://play-siv3d.hateblo.jp/entry/slack",
        "description": "Siv3D ユーザのための Slack https://slack.com/ グループチャットをオープンしました。",
        "tag": ["Game", "C++"]
      }

    ]
, search: '' };
  }

  componentDidMount() {
    console.log('a')
    fetch('/slack-list-ja/teams.json')
      .then(res => res.json())
      .then(teams => this.setState({ teams }))
      .catch(e => console.log('parsing failed', e));
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
