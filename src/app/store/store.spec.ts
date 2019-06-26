import * as fromPizzas from './pizzas.reducer';
import * as fromActions from './pizzas.actions';
import { Pizza } from './pizza.model';

describe('PizzasReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromPizzas;
      const action = new fromActions.LoadPizzas();;
      const state = fromPizzas.reducer(undefined, action);

      expect(state.loading).toEqual(true);
      // untouched props, good to add regardless
      expect(state.loaded).toEqual(true);
      expect(state.entities).toEqual({});
    });
  });
  // I nest all tests under the reducer's name
  // for readability in the terminal
});
