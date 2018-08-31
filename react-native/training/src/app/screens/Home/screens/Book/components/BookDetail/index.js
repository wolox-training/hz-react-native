import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../../../components/CustomText';
import { strings } from '../../../../../../i18n';
import defaultImage from '../../../../../../../assets/book-cover-default.jpg';

import styles from './styles';

function BookDetail({ navigation }) {
  const data = navigation.getParam('data');
  const source = data.image_url ? { uri: data.image_url } : defaultImage;
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image style={styles.bookImage} source={source} />
      <View style={styles.bookInfo}>
        <CustomText style={styles.subTitle}>{strings.AUTHOR()} </CustomText>
        <CustomText>{data.author}</CustomText>
      </View>
      <View style={styles.bookInfo}>
        <CustomText style={styles.subTitle}>{strings.GENERE()} </CustomText>
        <CustomText>{data.genre}</CustomText>
      </View>
      <View style={styles.bookInfo}>
        <CustomText style={styles.subTitle}>{strings.PUBLISHER()} </CustomText>
        <CustomText>{data.publisher}</CustomText>
      </View>
      <View style={styles.bookInfo}>
        <CustomText style={styles.subTitle}>{strings.YEAR()} </CustomText>
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
