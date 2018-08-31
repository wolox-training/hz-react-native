import { createTypes, completeTypes } from 'redux-recompose';

import { get } from '../../services/BookService';

export const actions = createTypes(completeTypes(['FETCH_BOOK']), '@@BOOK');

const actionsCreators = {
  getBooks: () => ({
    type: actions.FETCH_BOOK,
    target: 'books',
    service: get
  })
};

export default actionsCreators;
