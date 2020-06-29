import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../styles/colors';

export const Container = styled.View`
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

export const NewsTitle = styled.Text`
    align-self: flex-start;
    text-decoration: underline;
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
