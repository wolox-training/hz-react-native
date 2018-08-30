import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../../../components/CustomText';
import { defaultImage } from '../../../../../../../constants/defaultValues';

import styles from './styles';

function BookDetail({ navigation }) {
  const data = navigation.getParam('data');
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image style={styles.bookImage} source={{ uri: data.image_url || defaultImage }} />
      <View style={styles.bookInfo}>
        <CustomText style={styles.subTitle}>Author: </CustomText>
        <CustomText>{data.author}</CustomText>
      </View>
      <View style={styles.bookInfo}>
        <CustomText style={styles.subTitle}>Genere: </CustomText>
        <CustomText>{data.genre}</CustomText>
      </View>
      <View style={styles.bookInfo}>
        <CustomText style={styles.subTitle}>Publisher: </CustomText>
        <CustomText>{data.publisher}</CustomText>
      </View>
      <View style={styles.bookInfo}>
        <CustomText style={styles.subTitle}>Year: </CustomText>
        <CustomText>{data.year}</CustomText>
      </View>
    </ScrollView>
  );
}

BookDetail.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired
  })
};

export default BookDetail;
