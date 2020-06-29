import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { KeyboardAvoidingView, Alert } from 'react-native';

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

const CreateNews = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    function handleNavigate(page) {
        navigation.navigate(page);
    }

    async function saveNews(news) {
        const id = Math.floor(Math.random() * (1000 - 1 + 1) + 1);

        const data = {
            id,
            title: news.title,
            author: news.author,
            content: news.content,
        };

        const realm = await getRealm();

        realm.write(() => {
            realm.create('News', data);
        });
    }

    async function handleSubmit() {
        const data = { title, author, content };

        await saveNews(data);

        navigation.navigate('Home');

        Alert.alert('Sucesso', 'Uma nova notícia foi criada com sucesso!');
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
                        <Title>Criar notícia</Title>
                        <Description>Crie uma nova notícia</Description>
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

                <Button title="Criar" action={handleSubmit} />
            </Form>
        </Container>
    );
};

CreateNews.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default CreateNews;
