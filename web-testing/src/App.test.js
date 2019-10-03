import React from 'react';
import ReactDOM from 'react-dom';
import App, { addBalls, addStrike, addFoulBall} from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('addBalls adds up to 3 balls, then resets to 0 at 4 balls', () => {
  expect(addBalls(0)).toBe(1);
  expect(addBalls(1)).toBe(2);
  expect(addBalls(2)).toBe(3);
  // expect(addBalls(3)).toBe(1); // - fails
  expect(addBalls(3)).toBe(0);
})

test('addStrike adds up to 2 strikes, then resets to 0 at 3 strikes', () => {
  expect(addStrike(0)).toBe(1);
  expect(addStrike(1)).toBe(2);
  // expect(addStrike(2)).toBe(1); // - fails
  expect(addStrike(2)).toBe(0);
})

test('addFoulBall adds up to 2 strikes and stops at 2', () => {
  expect(addFoulBall(0)).toBe(1);
  expect(addFoulBall(1)).toBe(2);
  // expect(addFoulBall(2)).toBe(3); // - fails
  expect(addFoulBall(2)).toBe(2);
})