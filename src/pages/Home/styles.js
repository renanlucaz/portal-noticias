import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../styles/colors';

export const Container = styled.View`
    background-color: ${colors.background};
    flex: 1;
`;

export const Header = styled(LinearGradient).attrs({
    colors: [`${colors.primary}`, 'rgba(0,0,0,.2)'],
})`
    padding: 25px;
`;

export const BackgroundImage = styled.ImageBackground``;

export const Title = styled.Text`
    font-size: 32px;
    margin-top: 7px;
    font-weight: bold;
    color: white;
`;

export const Description = styled.Text`
    font-size: 18px;
    color: white;
    margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 13px 0;
    border-radius: 50px;
    background-color: white;
    margin-top: 14px;
`;

export const ButtonText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${colors.primary};
`;

export const Main = styled.View`
    flex: 1;
    padding: 25px 25px 0px 25px;
    background-color: ${colors.background};
`;

export const FindInput = styled.TextInput`
    border: 1px solid ${colors.primary};
    border-radius: 50px;
    padding: 10px 20px;
`;

export const NewsList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    margin-top: 15px;
`;
