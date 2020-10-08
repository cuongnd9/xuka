import { request } from '../src';

it('test', async() => {
  const { data } = await request('https://jsonplaceholder.typicode.com/todos/1');
  expect(data.userId).toEqual(1);
  expect(data.id).toEqual(1);
  expect(data.title).toEqual('delectus aut autem');
  expect(data.completed).toEqual(false);
});
