import React from 'react';

export default class NameListItem extends React.Component {
  render () {
    return (
      <li data-id="1433" data-rated="" className="one-name basic">
          <div className="head clearfix">
              <div className="name">{this.props.resource.label}</div>
          </div>

          <div className="extra">
              <div className="description">{this.props.resource.description}</div>
          </div>

      </li>
    );
  }
}
