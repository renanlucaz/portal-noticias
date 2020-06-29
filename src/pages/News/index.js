import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Header,
    BackgroundImage,
    BackIcon,
    Title,
    Description,
    Content,
    Text,
} from './styles';

import background from '../../assets/background.jpg';

const News = ({ navigation }) => {
    function handleNavigate(page) {
        navigation.navigate(page);
    }

    return (
        <Container>
            <BackgroundImage source={background}>
                <Header>
                    <BackIcon
                        name="keyboard-backspace"
                        onPress={() => handleNavigate('Home')}
                    />
                    <Title>Título da notícia</Title>
                    <Description>de Renan Nascimento</Description>
                </Header>
            </BackgroundImage>
            <Content>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Text>
            </Content>
        </Container>
    );
};

News.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default News;
