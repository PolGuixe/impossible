export default {
  create({Meteor, LocalState}, email, password) {
    // e.g. update local state

    //LocalState.set('KEY', null);
    //if (!myParam) {
    //  LocalState.set('ERROR', 'myParam is required.');
    //  return;
    //}

    // e.g. update remote state

    //Meteor.call('posts.createComment', id, postId, text, (err) => {
    //  if (err) {
    //    alert(`Post creating failed: ${err.message}`);
    //  }
    //});
    if(!email){
      return LocalState.set('CREATE_USER_ERROR','Email is required.');
    }

    if(!password){
        return LocalState.set('CREATE_USER_ERROR, Password is required.');
    }

    LocalState.set('CREATE_USER_ERROR', null);

    Accounts.createUser({email, password});

    FlowRouter.go('/');
  },

  //clear local state
  clearErrors({LocalState}) {
   return LocalState.set('SAVING_ERROR', null);
  }
};
