'use strict';
module.exports = function(app) {
  var todoList = require('../scripts/controller');

  // todoList Routes
  app.route('/tasks')
   // .get(todoList.list_all_tasks)
    .post(todoList.list_all_tasks);

};