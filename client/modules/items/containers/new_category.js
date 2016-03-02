import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import NewCategory from '../components/new_category.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_CATEGORY_ERROR');
  onData(null, {error});

  //clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.categories.create,
  clearErrors: actions.categories.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewCategory);
