const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const todos = [{
    test: 'First test todo'
}, {
    text: 'Second test todo'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

// describe('POST /todos', () => {
//     it('should create a new todo', (done) => {
//         let text = 'Test string';
//
//         request(app)
//             .post('/todos')
//             .send({text})
//             .expect(201)
//             .expect((res) => {
//                 expect(res.body.text).toBe(text);
//             })
//             .end((err, res) => {
//                 if(err) {
//                     return done(err);
//                 }
//
//                 Todo.find().then((todos) => {
//                     expect(todos.length).toBe(1);
//                     expect(todos[0].text).toBe(text);
//                     done();
//                 }).catch(e => done(e));
//             })
//     });
//
// });
//
// describe('GET /todos', () => {
//     it('should get all todos', (done) => {
//         request(app)
//             .get('/todos')
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body.todos.length).toBe(2);
//             })
//             .end(done);
//     })
// });