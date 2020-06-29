import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../styles/colors';

export const Container = styled.View`
    background-color: ${colors.background};
    flex: 1;
`;

export const Header = styled(LinearGradient).attrs({
    colors: [`${colors.primary}`, 'rgba(0,0,0,.2)'],
})`
    padding: 18px 0 20px 0;
    align-items: center;
`;

export const BackgroundImage = styled.ImageBackground``;

export const BackIcon = styled(Icon)`
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 34px;
    color: #fff;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: white;
`;

export const Description = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    color: white;
`;

export const Content = styled.View`
    padding: 22px;
`;

export const Text = styled.Text`
    font-size: 16px;
    text-align: justify;
`;
