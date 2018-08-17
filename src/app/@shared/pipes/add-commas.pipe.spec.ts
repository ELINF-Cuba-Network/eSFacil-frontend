import { AddCommasPipe } from './add-commas.pipe';

describe('AddCommasPipe', () => {
  it('create an instance', () => {
    const pipe = new AddCommasPipe();
    expect(pipe).toBeTruthy();
  });
});
