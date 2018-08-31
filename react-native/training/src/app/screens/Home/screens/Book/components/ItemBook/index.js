import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../../../components/CustomText';
import { propBook } from '../../../../../../../constants/propTypes';
import defaultImage from '../../../../../../../assets/book-cover-default.jpg';

import styles from './styles';

class ItemBook extends Component {
  handleOnPress = () => {
    const { selectBook, data } = this.props;
    selectBook(data);
  };

  render() {
    const { data } = this.props;
    const source = data.image_url ? { uri: data.image_url } : defaultImage;
    return (
      <TouchableHighlight onPress={this.handleOnPress}>
        <View style={styles.container}>
          <Image style={styles.bookImage} source={source} />
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
  data: PropTypes.shape(propBook),
  selectBook: PropTypes.func.isRequired
};

export default ItemBook;
