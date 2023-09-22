//

import { calculateMangosPrice } from '../src/calculateMangosPrice';

// (null,null) -> 0
// (1,3) -> 3
// (2,3) -> 6
// (3,3) -> 6
// (5,3) -> 12
// (6,3) -> 12
// (6,1) -> 4

describe('calculateMangosPrice', () => {
  it('the calculation will never be null', () => {
    expect(calculateMangosPrice(null,null)).toEqual(0);
  });
  xit('the calculation will never be null', () => {
    // not implemented
  });
  it('the calculated price multiplies the mango cost per the amount', () => {
    expect(calculateMangosPrice(1,3)).toEqual(3);
    expect(calculateMangosPrice(2,3)).toEqual(6);
  });
  it('makes a 3 per 2 offer', () => {
    expect(calculateMangosPrice(3,3)).toEqual(6);
    expect(calculateMangosPrice(5,3)).toEqual(12);
    expect(calculateMangosPrice(6,3)).toEqual(12);
    expect(calculateMangosPrice(6,1)).toEqual(4);
  });
});
