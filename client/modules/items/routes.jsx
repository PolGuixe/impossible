import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import CategoryList from './components/category_list.jsx';
import NewCategory from './components/new_category.jsx';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

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
