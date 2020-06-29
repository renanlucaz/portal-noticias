import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    EditIcon,
    DeleteIcon,
    NewsTitle,
    NewsText,
    NewsAuthorContainer,
    NewsAuthorSpan,
    NewsAuthor,
} from './styles';

const News = ({ data, navigation }) => {
    function handleNavigate(page) {
        navigation.navigate(page);
    }

    return (
        <Container>
            <EditIcon
                name="file-document-edit"
                onPress={() => handleNavigate('News')}
            />
            <DeleteIcon
                name="trash-can"
                onPress={() => handleNavigate('News')}
            />
            <NewsTitle onTouchEnd={() => handleNavigate('News')}>
                {data.title}
            </NewsTitle>
            <NewsText>{data.content}</NewsText>
            <NewsAuthorContainer>
                <NewsAuthorSpan>Autor: </NewsAuthorSpan>
                <NewsAuthor>{data.author}</NewsAuthor>
            </NewsAuthorContainer>
        </Container>
    );
};

News.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
};

export default News;
