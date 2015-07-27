import React from 'react';
import NameListItem from './NameListItem';
import ResourceStore from "../stores/ResourceStore";

let getNamesFromStore = () => {
  return { resources: ResourceStore.getNames() };
};

export default class NameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = getNamesFromStore();
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  onStoreChange() {
    this.setState(getNamesFromStore());
  }
  componentDidMount() {
    ResourceStore.addChangeListener(this.onStoreChange);
  }
  componentWillUnmount() {
    ResourceStore.removeChangeListener(this.onStoreChange);
  }
  render () {
    let resources = this.state.resources.map((resource, i) => {
      return <NameListItem resource={resource} key={i} />;
    });
    return (
      <div id="names_list">
          <h4 className="t2">Rate your favorite names</h4>
          <div id="names_display" data-page="1" data-href="/entries/13495806-smartphone-reminders-for-behaviors-you-want-to-do/names">
              <ul id="names-list" className="name_list votable unstyled">
                  {resources}
              </ul>
          </div>
      </div>
    );
  }
}
