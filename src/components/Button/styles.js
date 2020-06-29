import styled from 'styled-components';
import colors from '../../styles/colors';

export const Background = styled.TouchableOpacity`
    background: ${colors.primary};
    border-radius: 50px;
    padding: 15px 0;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #fff;
`;
