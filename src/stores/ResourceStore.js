import AppDispatcher from "../dispatcher";
import Actions from "../constants";
import AppEventEmitter from "./AppEventEmitter";

let _names = [];
let _entry = [];

class ResourceEventEmitter extends AppEventEmitter {
  getNames() {
    //console.log('get names is fired', _names);
    return _names;
  }
  getEntry() {
    //console.log('inside getEntry in ResourceEventEmitter', _entry);
    return _entry;
  }
}

let ResourseStore = new ResourceEventEmitter();

AppDispatcher.register( action => {
  switch (action.actionType) {
    case Actions.RECEIVE_ENTRY:
      _entry = action.entry;
      //console.log('inside entry callback', action);
      ResourseStore.emitChange();
      break;
    case Actions.RECEIVE_RESOURCES:
      //do something
      _names = action.names;
      //console.log('3 inside callback registered by the store', action);
      ResourseStore.emitChange();
      break;
    case Actions.RECEIVE_RESOURCE:
      _entry.push(action.article);
      ResourseStore.emitChange();
      break;
    default:
      //no operations
  }
});

export default ResourseStore
