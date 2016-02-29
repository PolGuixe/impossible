import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import ItemList from '../items/components/item_list.jsx';
import EditItem from '../items/components/edit_item.jsx';
import NewUser from '../users/components/new_user.jsx';

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
}
