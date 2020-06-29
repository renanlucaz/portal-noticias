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
    color: white;
    margin-top: 16px;
`;

export const Form = styled.KeyboardAvoidingView`
    padding: 28px;
`;

export const Field = styled.View`
    margin-bottom: 10px;
`;

export const Label = styled.Text`
    font-size: 18px;
    color: ${colors.primary};
    margin-bottom: 10px;
`;

export const Input = styled.TextInput`
    padding: 10px 15px;
    border: 1px solid ${colors.primary};
    border-radius: 10px;
`;

export const TextArea = styled.TextInput`
    padding: 15px;
    text-align-vertical: top;
    justify-content: flex-start;
    border: 1px solid ${colors.primary};
    border-radius: 10px;
`;
