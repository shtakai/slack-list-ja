import Inferno from 'inferno';
import { Component } from 'inferno-component';
import Item from './item';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    fetch('/teams.json')
      .then(res => res.json())
      .then(json => console.log('parsed json', json))
      .catch(ex => console.log('parsing failed', ex));
  }

  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-content">
            <div className="container">
              <h1 className="title">
                slak list in ja
              </h1>
              <h2 className="subtitle">
                A handpicked selection of top Slack communities
              </h2>
            </div>
          </div>
        </section>
        <div className="items">
          <div class="columns">
            <div class="column">
              <Item />
            </div>
            <div class="column">
              <Item />
            </div>
            <div class="column">
              <Item />
            </div>
            <div class="column">
              <Item />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
