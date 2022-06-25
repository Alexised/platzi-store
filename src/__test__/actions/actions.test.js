import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMocks';

describe('Actions', () => {
  const payload = ProductMock;
  const expected = action => ({
    type: action,
    payload,
  });
  test('addToCart Action', () => {
    expect(actions.addToCart(payload)).toEqual(expected('ADD_TO_CART'));
  });

  test('removeFromCart Action', () => {
    expect(actions.removeFromCart(payload)).toEqual(expected('REMOVE_FROM_CART'));
  });
});
