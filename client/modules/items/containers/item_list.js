import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import ItemList from '../components/item_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('items.list').ready()) {
    const items = Collections.Items.find({},{sort:{due: 1}}).fetch();
    onData(null, {items});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ItemList);
