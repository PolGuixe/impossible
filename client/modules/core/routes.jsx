import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import ItemList from '../items/containers/item_list';
import EditItem from '../items/containers/edit_item';
import NewUser from '../users/containers/new_user';
import Login from '../users/containers/login';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ItemList />)
      });
    }
  });

  FlowRouter.route('/edit/:itemId',{
    name:'items.edit',
    action({itemId}){
      mount(MainLayoutCtx,{
        content: () => (<EditItem itemId={itemId} />)
      });
    }
  });

  FlowRouter.route('/edit/',{
    name:'items.edit',
    action(){
      mount(MainLayoutCtx,{
        content: () => (<EditItem />)
      });
    }
  });

  FlowRouter.route('/register',{
    name: 'users.new',
    action(){
      mount(MainLayoutCtx, {
        content: () => (<NewUser />)
      });
    }
  });

  FlowRouter.route('/login',{
    name: 'users.login',
    action(){
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });

  FlowRouter.route('/logout',{
    name: 'users.logout',
    action(){
    Meteor.logout();
    FlowRouter.go('/');
    }
  });

}
