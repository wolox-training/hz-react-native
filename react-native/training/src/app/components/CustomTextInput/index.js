import React, { PureComponent } from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';
import { transparent } from '../../../constants/colors';

import ShowPassword from './components/ShowPassword';
import styles from './styles';

// Known issue: showing/hiding the text with secureTextEntry changes the cursor position
// https://github.com/facebook/react-native/issues/5859

class CustomTextInput extends PureComponent {
  state = { showPassword: false, inputValue: '' };

  handleShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  updateValue = value => {
    this.setState({ inputValue: value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  handleSubmitEditing = () => {
    this.props.onSubmitEditing(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const placeholderTextColor = this.props.value ? transparent : this.props.placeholderTextColor;

    return (
      <View>
        {this.props.title && (
          <CustomText gray small style={[styles.title, this.props.titleStyles]}>
            {this.props.title}
          </CustomText>
        )}
        <View
          style={[
            this.props.multiline ? styles.multilineContainer : styles.container,
            this.props.bottomBorder && styles.bottomBorder,
            this.props.style
          ]}
        >
          <TextInput
            {...this.props}
            allowFontScaling={false}
            onChangeText={this.updateValue}
            onBlur={this.props.onBlur}
            onFocus={this.props.onFocus}
            onSubmitEditing={this.handleSubmitEditing}
            value={this.props.value || this.state.inputValue}
            style={[
              styles.inputStyle,
              this.props.multiline ? styles.multilineInput : styles.singleInput,
              this.props.textStyles
            ]}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={this.props.secureTextEntry && !this.state.showPassword}
            autoComplete={!this.props.secureTextEntry}
          />
          {this.props.secureTextEntry &&
            this.props.showEye && (
              <ShowPassword
                onShowPassword={this.handleShowPassword}
                passwordVisible={this.state.showPassword}
              />
            )}
        </View>
      </View>
    );
  }
}

CustomTextInput.defaultProps = {
  placeholder: this.emptyString,
  autoCorrect: false,
  autoCapitalize: 'sentences',
  clearButtonMode: 'never',
  returnKeyType: 'done',
  underlineColorAndroid: transparent,
  keyboardType: 'default',
  multiline: false,
  bottomBorder: false,
  maxHeight: 200
};

CustomTextInput.propTypes = {
  bottomBorder: PropTypes.bool,
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search']),
  keyboardType: PropTypes.oneOf(['default', 'numeric', 'email-address', 'phone-pad']),
  underlineColorAndroid: PropTypes.string,
  maxHeight: PropTypes.number,
  autoCorrect: PropTypes.bool,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  titleStyles: Text.propTypes.style,
  textStyles: Text.propTypes.style,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onSubmitEditing: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  showEye: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  title: PropTypes.string
};

export default CustomTextInput;
