import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../../../components/CustomText';
import { propBook } from '../../../../../../../constants/propTypes';

import styles from './styles';

const defaultImage = '../../../../../../../assets/book-cover-default.jpg';

function ItemBook({ data }) {
  const source = data.image_url ? { uri: data.image_url } : require(defaultImage);
  return (
    <View style={styles.container}>
      <Image style={styles.bookImage} source={source} />
      <View style={styles.bookInfo}>
        <CustomText style={styles.bookTitle}>{data.title}</CustomText>
        <CustomText>{data.author}</CustomText>
      </View>
    </View>
  );
}

ItemBook.propTypes = {
  data: PropTypes.shape(propBook)
};

export default ItemBook;
