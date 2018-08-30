import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../../../../../../components/CustomButton';
import { strings } from '../../../../../../i18n';

import styles from './styles';

function Footer({ deleteItemSelected }) {
  return (
    <CustomButton
      onPress={deleteItemSelected}
      title={strings.FOOTER_MESSAGE()}
      white
      textStyle={styles.textButton}
      activeOpacity={0.6}
    />
  );
}

Footer.propTypes = {
  deleteItemSelected: PropTypes.func.isRequired
};

export default Footer;
