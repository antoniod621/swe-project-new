const TodoList = require('./TodoList')

task = 'Work on tools';
curKey = 0;
test('Add Task to task list', (task) => {
    curKey = Date.now;
    expect(addItem(task).toBe(null) && expect(items.toBe('Work on tools')))
});

task = " "
test('Add empty task', (task) =>{
    expect(addItem(task).toBe(null) && expect(items.toBe('Work on tools')))
});

test("Delete a task", (curKey) =>{
    expect(deleteItem(curKey).toBe(null) && expect(items.toBe(null)));
})
