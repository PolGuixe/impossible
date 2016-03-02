import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import CategoryList from '../components/category_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('categories.list').ready()) {
    const categories = Collections.Categories.find().fetch();
    onData(null, {categories});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(CategoryList);
