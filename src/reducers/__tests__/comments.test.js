import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('should handle SAVE_COMMENT actions type', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['New Comment']);
});

it('should handle unknown actions type', () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
