import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookActions from '../../../../../redux/book/actions';
import Routes from '../../../../../constants/routes';

import ItemBook from './components/ItemBook';

class Book extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  gotoDetail = data => {
    const { navigation } = this.props;
    navigation.navigate(Routes.BookDetail, {
      title: data.title,
      data
    });
  };

  render() {
    const { books } = this.props;
    return (
      <ScrollView>
        {books.map(item => (
          <ItemBook key={item.id} data={item} selectBook={this.gotoDetail} />
        ))}
      </ScrollView>
    );
  }
}

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      title: PropTypes.string,
      genre: PropTypes.string,
      publisher: PropTypes.string,
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  ),
  getBooks: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
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
