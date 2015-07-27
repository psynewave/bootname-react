var React = require('react');

import Entry from './Entry';
import Rewards from './Rewards';
import NameList from './NameList';

export default React.createClass({
  render: function() {
    return (
      <div id="entryContainer" className="row">
        <Entry />
        <Rewards />
        <NameList />
      </div>
    );
  }
});
