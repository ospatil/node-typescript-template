import { greet } from '../src/index';
import { describe, expect } from '@jest/globals';

describe('greet', () => {
  it('returns correct greeting', () => {
    expect(greet()).toEqual('Bonjour tout le monde !');
  });
});
