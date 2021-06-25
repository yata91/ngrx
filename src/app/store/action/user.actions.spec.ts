import * as fromUser from './user.actions';

describe('loadUsers', () => {
  it('should return an action', () => {
    expect(fromUser.getUsers().type).toBe('[User] Load Users');
  });
});
