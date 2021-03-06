const fetchBooksRequest = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
}

const fetchBooksSuccess = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
}

const fetchBooksFailure = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
}

const bookAddedToCard = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  };
}

const bookRemovedFromCard = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId,
  };
}

const allBooksRemovedFromCard = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId,
  };
}

const fetchBooksOld = (bookstoreService, dispatch) => () => {
  dispatch(fetchBooksRequest());
  bookstoreService.getBooks()
    .then((data) => dispatch(fetchBooksSuccess(data)))
    .catch((err) => dispatch(fetchBooksFailure(err)));
}

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(fetchBooksRequest());
  bookstoreService.getBooks()
    .then((data) => dispatch(fetchBooksSuccess(data)))
    .catch((err) => dispatch(fetchBooksFailure(err)));
}

export {
  fetchBooks,
  fetchBooksOld,
  bookAddedToCard,
  bookRemovedFromCard,
  allBooksRemovedFromCard,
};
