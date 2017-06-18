const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '594588e4f6f6ba3380483515';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
Todo.findOne({
    _id: id
  }).then((todo) => {
    if (!todo) return console.log('Todo not found');
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) return console.log('Todo not found by Id');
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));
