
import Inferno from 'inferno';
import { Component } from 'inferno-component';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card animated fadeInUp">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{ this.props.name }</p>
              <p className="subtitle is-6">{ this.props.url }</p>
            </div>
          </div>
          <div className="content">
            { this.props.description }
          </div>
        </div>
      </div>
    );
  }
}
