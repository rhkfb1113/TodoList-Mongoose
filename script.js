var todos = [];

var input = prompt('What would you like to do?');

while (input !== 'quit') {
  // Handle input
  if (input === 'list') {
    console.log(todos);
  } else if (input === 'new') {
    // Ask for new todo
    var newTodo = prompt('Enter new todo');
    // Add to todos array
    todos.push(newTodo);
  }
  // Ask again for new input
  input = prompt('What would you like to do?');
}
console.log('Ok, You quit the app.');
