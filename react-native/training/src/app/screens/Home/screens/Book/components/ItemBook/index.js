import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../../../components/CustomText';
import { defaultImage } from '../../../../../../../constants/defaultValues';

import styles from './styles';

class ItemBook extends Component {
  handleOnPress = () => {
    const { selectBook, data } = this.props;
    selectBook(data);
  };

  render() {
    const { data } = this.props;
    return (
      <TouchableHighlight onPress={this.handleOnPress}>
        <View style={styles.container}>
          <Image style={styles.bookImage} source={{ uri: data.image_url || defaultImage }} />
          <View style={styles.bookInfo}>
            <CustomText style={styles.bookTitle}>{data.title}</CustomText>
            <CustomText>{data.author}</CustomText>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

ItemBook.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }),
  selectBook: PropTypes.func.isRequired
};

export default ItemBook;
