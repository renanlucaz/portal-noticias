import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Header,
    BackgroundImage,
    BackContainer,
    BackIcon,
    BackText,
    Title,
    Description,
    Content,
    Text,
} from './styles';

import background from '../../assets/background.jpg';

const News = ({ navigation, route: { params } }) => {
    function handleNavigate(page) {
        navigation.navigate(page);
    }

    const { data } = params;

    return (
        <Container>
            <BackgroundImage source={background}>
                <Header>
                    <Title>{data.title}</Title>
                    <Description>Escrito por {data.author}</Description>
                </Header>
            </BackgroundImage>
            <Content>
                <BackContainer onTouchEnd={() => handleNavigate('Home')}>
                    <BackIcon name="chevron-left" />
                    <BackText>Voltar</BackText>
                </BackContainer>
                <Text>{data.content}</Text>
            </Content>
        </Container>
    );
};

News.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    route: PropTypes.shape({
        params: PropTypes.shape({
            data: PropTypes.shape({
                title: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                author: PropTypes.string.isRequired,
            }),
        }),
    }).isRequired,
};

export default News;
