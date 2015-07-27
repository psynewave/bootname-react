import EntryContainer from './EntryContainer';
import NamingForm from './NamingForm';

import React from 'react';

export default class App extends React.Component {
  render () {
    return (
      <div className="appHolder">
        <div className="body">
            <div className="container">
                <EntryContainer />
                <NamingForm />
            </div>
        </div>
      </div>
    );
  }
}
