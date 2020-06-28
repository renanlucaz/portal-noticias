import React from 'react';
import PropTypes from 'prop-types';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import {
    Container,
    Header,
    BackgroundImage,
    Title,
    Description,
    Button,
    ButtonText,
    Main,
    FindInput,
    NewsContainer,
    EditIcon,
    DeleteIcon,
    NewsBackground,
    NewsTitle,
    NewsText,
    NewsAuthorContainer,
    NewsAuthorSpan,
    NewsAuthor,
} from './styles';

import background from '../../assets/background.jpg';

const Home = ({ navigation }) => {
    function handleNavigate(page) {
        navigation.navigate(page);
    }

    return (
        <Container>
            <BackgroundImage source={background}>
                <Header>
                    <Title>Portal de notícias</Title>
                    <Description>
                        Leia suas notícias mais importantes de última hora! crie
                        e edite notícias da forma que melhor desejar
                    </Description>
                    <HideWithKeyboard>
                        <Button onPress={() => handleNavigate('CreateNews')}>
                            <ButtonText>+ Criar nova notícia</ButtonText>
                        </Button>
                    </HideWithKeyboard>
                </Header>
            </BackgroundImage>
            <Main>
                <FindInput placeholder="Pesquise por uma" />

                <NewsContainer>
                    <NewsBackground>
                        <EditIcon name="file-document-edit" />
                        <DeleteIcon name="trash-can" />
                        <NewsTitle>Título da notícia</NewsTitle>
                        <NewsText>Lorem impsul dolot amet..</NewsText>
                        <NewsAuthorContainer>
                            <NewsAuthorSpan>Autor: </NewsAuthorSpan>
                            <NewsAuthor>Renan Nascimento</NewsAuthor>
                        </NewsAuthorContainer>
                    </NewsBackground>
                    <NewsBackground>
                        <EditIcon name="file-document-edit" />
                        <DeleteIcon name="trash-can" />
                        <NewsTitle>Título da notícia</NewsTitle>
                        <NewsText>Lorem impsul dolot amet..</NewsText>
                        <NewsAuthorContainer>
                            <NewsAuthorSpan>Autor: </NewsAuthorSpan>
                            <NewsAuthor>Renan Nascimento</NewsAuthor>
                        </NewsAuthorContainer>
                    </NewsBackground>
                    <NewsBackground>
                        <EditIcon name="file-document-edit" />
                        <DeleteIcon name="trash-can" />
                        <NewsTitle>Título da notícia</NewsTitle>
                        <NewsText>Lorem impsul dolot amet..</NewsText>
                        <NewsAuthorContainer>
                            <NewsAuthorSpan>Autor: </NewsAuthorSpan>
                            <NewsAuthor>Renan Nascimento</NewsAuthor>
                        </NewsAuthorContainer>
                    </NewsBackground>
                </NewsContainer>
            </Main>
        </Container>
    );
};

Home.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default Home;
