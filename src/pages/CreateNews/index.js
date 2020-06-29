import React from 'react';
import PropTypes from 'prop-types';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import { KeyboardAvoidingView, Alert } from 'react-native';

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
    function handleNavigate(page) {
        navigation.navigate(page);
    }

    function handleSubmit() {
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
                        <Input placeholder="Título da notícia" />
                    </Field>

                    <Field>
                        <Label>Autor</Label>
                        <Input placeholder="Autor da notícia" />
                    </Field>
                    <Field>
                        <Label>Conteúdo da notícia</Label>

                        <TextArea
                            placeholder="Escreva aqui"
                            multiline
                            numberOfLines={4}
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
