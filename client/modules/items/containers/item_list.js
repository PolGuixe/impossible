import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import ItemList from '../components/item_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('items.list').ready()) {
    const items = Collections.Items.find({},{sort:{due: 1}}).fetch();
    const totalItems = Collections.Items.find().count();
    const completedItems = Collections.Items.find({complete:true}).count();
    const percentage = Math.round((completedItems / totalItems) * 100);
    onData(null, {items, percentage});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ItemList);
