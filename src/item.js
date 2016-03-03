
import Inferno from 'inferno';
import { Component } from 'inferno-component';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
              <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    );
  }
}
