
const TodoItems = require('./TodoItems')
curKey = 0;
test('Add Antonio to Task', (Antonio) => {
    curKey = Date.now
    expect(createTask(Antonio).toBe({key: Date.now, name: Antonio}))
});

test('Delete Antonio From Task', (curKey) => {
    expect(delete(curKey).toBe(null) && items.toBe(null))
});

test('Add Akshay to Task', (Akshay) => {
    curKey = Date.now;
    expect(createTask(Akshay).toBe({key: Date.now, name: Akshay}))
});

test('Show all people assigned to as task', () =>{
    expect(render().toBe({key: curKey, name: Akshay}))
})