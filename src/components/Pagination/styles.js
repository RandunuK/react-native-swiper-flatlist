import { StyleSheet } from 'react-native';

import { vertical, horizontal, width } from '../../themes';

export default StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: vertical.xxSmall,
    alignItems: 'center',
    justifyContent: 'flex-start',
    bottom: 0,    
    marginLeft: 16,
    marginRight: 16,
  },
  pagination: {
    bottom: 0,  
    width: horizontal.xcSmall,
    height: horizontal.xcSmall,
    borderRadius: 25,
    marginHorizontal: horizontal.xxSmall,    
  },
});
