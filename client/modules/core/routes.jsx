import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import ItemList from '../items/components/item_list.jsx';
import EditItem from '../items/components/edit_item.jsx';
import NewUser from '../users/containers/new_user';
import Login from '../users/containers/login';
import CategoryList from '../items/containers/category_list';
import NewCategory from '../items/containers/new_category';

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

  FlowRouter.route('/edit',{
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

  FlowRouter.route('/categories', {
    name: 'categories.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CategoryList />)
      });
    }
  });

  FlowRouter.route('/categories/new/', {
    name: 'categories.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewCategory />)
      });
    }
  });


}
