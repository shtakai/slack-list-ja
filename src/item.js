
import Inferno from 'inferno';
import { Component } from 'inferno-component';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  renderTag() {
    //console.dir(this.props.tag.map(tag => <span class="tag is-success">{ tag }</span>));
    return this.props.tag.map(tag => <span class="tag is-success">{ tag }</span>);
  }

  render() {
    return (
      <div className="column is-3">
        <div className="card animated fadeInUp">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-5">{ this.props.name }</p>
                <a href={ this.props.url } className="">{ this.props.url }</a>
              </div>
            </div>
            <div className="content">
              { this.props.description }
            </div>
            { this.renderTag() }
          </div>
        </div>
      </div>
    );
  }
}
