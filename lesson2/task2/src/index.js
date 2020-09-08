import {store, increment, decrement, reset} from './store';

const decrementBtnEl = document.querySelector('[data-action="decrement"]')
const incrementBtnEl = document.querySelector('[data-action="increment"]')
const resetBtnEl = document.querySelector('[data-action="reset"]')
const counterResultEl = document.querySelector('.counter__result')

const onDecrementCount = () => {
  store.dispatch(decrement())
}
decrementBtnEl.addEventListener('click', onDecrementCount)

const onIncrementCount = () => {
  store.dispatch(increment())
}
incrementBtnEl.addEventListener('click', onIncrementCount)

const onResetCount = () => {
  store.dispatch(reset())
}
resetBtnEl.addEventListener('click', onResetCount)

store.subscribe(() => {
  const history = store.getState().history;
  const expression = history.join('');
  const sum = history.reduce((acc, next) => acc + +next, 0);
  counterResultEl.textContent = history.length === 0 
  ? ''
  : `${expression}=${sum}`
}) 