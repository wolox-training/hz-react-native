import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookActions from '../../../../../redux/book/actions';
import { propBook } from '../../../../../constants/propTypes';

import ItemBook from './components/ItemBook';

class Book extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  render() {
    const { books } = this.props;
    return (
      <ScrollView>
        {books.map(item => (
          <ItemBook key={item.id} data={item} />
        ))}
      </ScrollView>
    );
  }
}

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(propBook)),
  getBooks: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  books: store.book.books
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(BookActions.getBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
