import React from 'react';

export default class Entry extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div id="entry" className="col-md-7">
        <div className="header">
            <div className="container">
                <div className="nmh4 t2 mar1 c">{this.props.entry.title}</div>
            </div>
        </div>
        <div id="entryDescription">
            <h4 className="t2">Summary</h4>
            <div className="code">
                <p>{this.props.entry.description}</p>
            </div>
            <p className="constraint mar1"><b>Constraints:</b> {this.props.entry.name_constraints}</p>
        </div>
      </div>
    );
  }
}
