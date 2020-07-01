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
    padding: 18px 10px 20px;
`;

export const BackgroundImage = styled.ImageBackground``;

export const BackContainer = styled.View`
    flex-direction: row;
    position: absolute;
    align-items: center;
    top: 10px;
    left: 10px;
`;

export const BackIcon = styled(Icon)`
    font-size: 30px;
    color: #333;
`;

export const BackText = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #333;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: white;
`;

export const Description = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    color: white;
`;

export const Content = styled.View`
    flex: 1;
    padding: 22px;
    position: relative;
`;

export const Text = styled.Text`
    font-size: 16px;
    margin-top: 35px;
    text-align: justify;
`;
