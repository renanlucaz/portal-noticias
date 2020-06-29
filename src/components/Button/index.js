import React from 'react';
import PropTypes from 'prop-types';

import { Background, Text } from './styles';

const Button = ({ title, action }) => {
    return (
        <Background onPress={action}>
            <Text>{title}</Text>
        </Background>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
};

export default Button;
