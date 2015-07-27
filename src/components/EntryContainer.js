import React from 'react';

import Entry from './Entry';
import Rewards from './Rewards';
import NameList from './NameList';
import ResourceStore from "../stores/ResourceStore";

let getEntryFromStore = () => {
  return { entry: ResourceStore.getEntry() };
};

export default class entryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = getEntryFromStore();
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  onStoreChange() {
    this.setState(getEntryFromStore());
  }
  componentDidMount() {
    ResourceStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    ResourceStore.removeChangeListener(this.onStoreChange);
  }
  render () {
    return (
      <div id="entryContainer" className="row">
        <Entry entry={this.state.entry}/>
        <Rewards entry={this.state.entry}/>
        <NameList code={this.state.entry.code}/>
      </div>
    );
  }
}
