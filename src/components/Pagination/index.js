import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View , Text} from 'react-native';

import { colors, horizontal } from '../../themes';
import styles from './styles';
import { ButtonBorderLess } from '../common/ButtonBorderLess';

export default class Pagination extends PureComponent {
  static propTypes = {
    scrollToIndex: PropTypes.func.isRequired,
    scrollToNextIndex: PropTypes.func.isRequired,
    data: PropTypes.array,
    paginationIndex: PropTypes.number,
    paginationActiveColor: PropTypes.string,
    paginationDefaultColor: PropTypes.string,
    paginationWidth: PropTypes.number,
    paginationHeight: PropTypes.number,
    paginationMarginHorizontal: PropTypes.number,
  };

  static defaultProps = {
    data: [],
    paginationIndex: 0,
    paginationActiveColor: colors.white,
    paginationDefaultColor: colors.gray,
    paginationWidth: horizontal.xxSmall,
    paginationHeight: horizontal.xxSmall,
    paginationMarginHorizontal: horizontal.xxSmall
  };

  render() {
    const {
      data,
      paginationIndex,
      scrollToIndex,
      scrollToNextIndex,
      paginationDefaultColor,
      paginationActiveColor,
      paginationWidth,
      paginationHeight,
      paginationMarginHorizontal
    } = this.props;

    const s = {  width:paginationWidth, height: paginationHeight}

    return (
      <View style={styles.paginationContainer}>
        <ButtonBorderLess style={{ fontWeight: '100', textAlign: 'left', color: '#fff' }}> Skip </ButtonBorderLess>
        {data.map((_, index) => (
          <View key={index}>
            <TouchableOpacity
              style={[
                styles.pagination,
                paginationIndex === index
                  ? { backgroundColor: paginationActiveColor }
                  : { backgroundColor: paginationDefaultColor }
              ]}
              key={index}
              onPress={() => scrollToIndex(index)}
            />
            
          </View>
        ))}
        <ButtonBorderLess style={{ fontWeight: '100', textAlign: 'right', color: '#fff' }} onPress={() => scrollToNextIndex(paginationIndex)}> Next </ButtonBorderLess>
      </View>
    );
  }
}
