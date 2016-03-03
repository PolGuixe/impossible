import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Items, Categories} from '/lib/collections';

export default function () {

  Meteor.publish("items.list", function(){
    return Items.find();
  });

  Meteor.publish('categories.list', function () {
    return Categories.find();
  });
}
