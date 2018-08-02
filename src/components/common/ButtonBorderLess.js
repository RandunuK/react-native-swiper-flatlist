import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonBorderLess = ({ onPress, children, style }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle]}>
            <Text style={[textStyle, style]} >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'baseline',
        backgroundColor: 'transparent',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 8,
        paddingBottom: 8
    }
};

export { ButtonBorderLess };
