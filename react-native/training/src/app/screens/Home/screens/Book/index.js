import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookActions from '../../../../../redux/book/actions';
import Routes from '../../../../../constants/routes';
import { propBook } from '../../../../../constants/propTypes';

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

  keyExtractor = item => `${item.id}`;

  renderList = ({ item }) => <ItemBook key={item.id} data={item} selectBook={this.gotoDetail} />;

  render() {
    const { books } = this.props;
    return <FlatList data={books} keyExtractor={this.keyExtractor} renderItem={this.renderList} />;
  }
}

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(propBook)),
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
