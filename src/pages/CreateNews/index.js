import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { KeyboardAvoidingView, Alert } from 'react-native';

import { useNews } from '../../context/News';

import getRealm from '../../services/realm';

import {
    Container,
    Header,
    BackgroundImage,
    BackIcon,
    Title,
    Description,
    Form,
    Field,
    Label,
    Input,
    TextArea,
} from './styles';

import Button from '../../components/Button';

import background from '../../assets/background.jpg';

const CreateNews = ({ navigation, route: { params } }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const { news, setNews } = useNews();

    const { edit } = params;

    if (edit) {
        useEffect(() => {
            function loadInput() {
                const { data } = params;

                setTitle(data.title);
                setAuthor(data.author);
                setContent(data.content);
            }
            loadInput();
        }, []);
    }

    function handleNavigate(page) {
        navigation.navigate(page);
    }

    async function createNews(data) {
        const newsData = {
            id: data.id,
            title: data.title,
            author: data.author,
            content: data.content,
        };

        const realm = await getRealm();

        realm.write(() => {
            realm.create('News', newsData, 'modified');
        });

        return newsData;
    }

    async function handleSubmit() {
        const id = Math.floor(Math.random() * (1000 - 1 + 1) + 1);

        const newsData = { id, title, author, content };

        setNews([...news, newsData]);

        await createNews(newsData);

        navigation.navigate('Home');

        Alert.alert('Sucesso', 'Uma nova notícia foi criada com sucesso!');
    }

    async function handleEdit() {
        const { data } = params;

        const editedData = { id: data.id, title, author, content };

        createNews(editedData);

        const realm = await getRealm();

        const newData = realm.objects('News');

        setNews(newData);

        navigation.navigate('Home', { data });

        Alert.alert('Sucesso', 'O valor foi editado');
    }

    return (
        <Container>
            <HideWithKeyboard>
                <BackgroundImage source={background}>
                    <Header>
                        <BackIcon
                            name="keyboard-backspace"
                            onPress={() => handleNavigate('Home')}
                        />
                        <Title>
                            {edit ? 'Editar notícia' : 'Criar notícia'}
                        </Title>
                        <Description>
                            {edit ? 'Edite sua notícia' : 'Crie uma notícia'}
                        </Description>
                    </Header>
                </BackgroundImage>
            </HideWithKeyboard>
            <Form>
                <KeyboardAvoidingView behavior="position">
                    <Field>
                        <Label>Título</Label>
                        <Input
                            placeholder="Título da notícia"
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                        />
                    </Field>

                    <Field>
                        <Label>Autor</Label>
                        <Input
                            placeholder="Autor da notícia"
                            value={author}
                            onChangeText={(text) => setAuthor(text)}
                        />
                    </Field>
                    <Field>
                        <Label>Conteúdo da notícia</Label>

                        <TextArea
                            placeholder="Escreva aqui"
                            multiline
                            numberOfLines={4}
                            value={content}
                            onChangeText={(text) => setContent(text)}
                        />
                    </Field>
                </KeyboardAvoidingView>
                {edit ? (
                    <Button title="Editar" action={handleEdit} />
                ) : (
                    <Button title="Criar" action={handleSubmit} />
                )}
            </Form>
        </Container>
    );
};

CreateNews.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    route: PropTypes.shape({
        params: PropTypes.shape({
            edit: PropTypes.bool,
            data: PropTypes.shape({
                title: PropTypes.string,
                author: PropTypes.string,
                content: PropTypes.string,
                id: PropTypes.number,
            }),
        }),
    }).isRequired,
};

export default CreateNews;
