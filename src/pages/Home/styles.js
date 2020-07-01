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
export const News = styled.View`
    position: relative;
    z-index: 1;
    background-color: #fff;
    border-radius: 15px;
    margin-bottom: 16px;
    padding: 14px;
    border-left-width: 18px;
    border-left-color: ${colors.primary};
    box-shadow: 6px 1px 2px rgba(0, 0, 0, 0.25);
    elevation: 3;
`;

export const EditIcon = styled(Icon)`
    font-size: 25px;
    color: ${colors.warn};
    position: absolute;
    z-index: 3;
    top: 10px;
    right: 50px;
`;

export const DeleteIcon = styled(Icon)`
    font-size: 25px;
    color: ${colors.danger};
    position: absolute;
    z-index: 3;
    top: 10px;
    right: 20px;
`;

export const NewsTitle = styled.Text.attrs({ numberOfLines: 1 })`
    align-self: flex-start;
    text-decoration: underline;
    width: 75%;
    font-size: 18px;
    font-weight: bold;
    color: ${colors.primary};
`;

export const NewsText = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 16px;
    margin: 7px 0;
    color: #555;
`;

export const NewsAuthorContainer = styled.Text`
    flex-direction: row;
`;

export const NewsAuthorSpan = styled.Text`
    font-size: 14px;
    color: #555;
`;

export const NewsAuthor = styled.Text`
    font-size: 14px;
    color: #555;
    font-weight: bold;
`;
