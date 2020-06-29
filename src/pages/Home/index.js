import React, { useState, useEffect } from 'react';
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
    NewsList,
} from './styles';

import News from '../../components/News';

import background from '../../assets/background.jpg';
import getRealm from '../../services/realm';

const Home = ({ navigation }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function loadNews() {
            const realm = await getRealm();

            const data = realm.objects('News');

            setNews(data);
        }

        loadNews();
    }, []);

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

                <NewsList
                    keyboardShouldPersistTaps="handled"
                    data={news}
                    keyExtractor={(notice) => String(notice.id)}
                    renderItem={({ item }) => (
                        <News data={item} navigation={navigation} />
                    )}
                />
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
