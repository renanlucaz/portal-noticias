import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
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
    News,
    EditIcon,
    DeleteIcon,
    NewsTitle,
    NewsText,
    NewsAuthorContainer,
    NewsAuthorSpan,
    NewsAuthor,
} from './styles';

import { useNews } from '../../context/News';
import background from '../../assets/background.jpg';
import getRealm from '../../services/realm';

const Home = ({ navigation }) => {
    const { news, setNews } = useNews();
    const [search, setSearch] = useState('');

    async function load() {
        const realm = await getRealm();

        const data = realm.objects('News');

        setNews(data);
    }

    useEffect(() => {
        load();
    }, []);

    async function findNews() {
        const realm = await getRealm();

        realm.write(async () => {
            const allNews = realm.objects('News');

            const filteredNews = allNews.filtered(
                `title CONTAINS[c] '${search}'`
            );

            if (filteredNews) {
                setNews(filteredNews);
            } else {
                setNews([]);
            }
        });
    }

    async function handleNavigate(page) {
        const edit = false;

        navigation.navigate(page, { edit });
    }

    function handleDelete({ id }) {
        Alert.alert(
            'Excluir',
            'Você tem certeza que deseja excluir? Essa é uma ação permanente',
            [
                {
                    text: 'Sim',
                    onPress: async () => {
                        const realm = await getRealm();

                        realm.write(async () => {
                            const allNews = realm.objects('News');

                            const FilteredNews = allNews.filtered(`id = ${id}`);

                            realm.delete(FilteredNews);

                            load();
                        });
                    },
                },
                {
                    text: 'Cancelar',
                    onPress: () => {
                        return 0;
                    },
                },
            ]
        );
    }

    function handleEdit(data) {
        const edit = true;

        navigation.navigate('CreateNews', { data, edit });
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
                <FindInput
                    placeholder="Pesquise por uma"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    onSubmitEditing={() => findNews()}
                />

                <NewsList
                    keyboardShouldPersistTaps="handled"
                    data={news}
                    keyExtractor={(notice) => String(notice.id)}
                    renderItem={({ item }) => (
                        <Animatable.View animation="fadeInUp">
                            <News>
                                <EditIcon
                                    name="file-document-edit"
                                    onPress={() => handleEdit(item)}
                                />
                                <DeleteIcon
                                    name="trash-can"
                                    onPress={() => handleDelete(item)}
                                />
                                <NewsTitle
                                    onTouchEnd={() =>
                                        navigation.navigate('News', {
                                            data: item,
                                        })
                                    }
                                >
                                    {item.title}
                                </NewsTitle>
                                <NewsText>{item.content}</NewsText>
                                <NewsAuthorContainer>
                                    <NewsAuthorSpan>Autor: </NewsAuthorSpan>
                                    <NewsAuthor>{item.author}</NewsAuthor>
                                </NewsAuthorContainer>
                            </News>
                        </Animatable.View>
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
