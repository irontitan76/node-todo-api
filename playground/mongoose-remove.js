const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findByIdAndRemove('5945dd4993fcf592fa20478a').then((doc) => {
//   console.log(doc);
// });

Todo.findOneAndRemove({text: "Something to do"}).then((doc) => {
  console.log(doc);
});
