import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../../../components/CustomText';

import styles from './styles';

const defaultImage = 'https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg';

function ItemBook({ data }) {
  return (
    <View style={styles.container}>
      <Image style={styles.bookImage} source={{ uri: data.image_url || defaultImage }} />
      <View style={styles.bookInfo}>
        <CustomText style={styles.bookTitle}>{data.title}</CustomText>
        <CustomText>{data.author}</CustomText>
      </View>
    </View>
  );
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
  })
};

export default ItemBook;
