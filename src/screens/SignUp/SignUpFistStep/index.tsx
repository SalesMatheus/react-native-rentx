import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import {
    Container,
    Header,
    Steps,
    Title,
    SubTitle,
    Form,
    FormTitle
} from './styles';

export function SignUpFistStep() {
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                <Container>
                    <StatusBar 
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    <Header>
                        <BackButton onPress={handleBack} />
                        <Steps>
                            <Bullet active/>
                            <Bullet/>
                        </Steps>
                    </Header>
                    <Title>
                        Crie sua {'\n'} conta
                    </Title>
                    <SubTitle>
                        Faça seu cadastro de {'\n'}
                        forma rápida e fácil
                    </SubTitle>

                    <Form>
                        <FormTitle>1. Dados</FormTitle>
                        <Input 
                            iconName="user"
                            placeholder="Nome"
                        />
                        <Input 
                            iconName="mail"
                            placeholder="E-mail"
                        />
                        <Input 
                            iconName="credit-card"
                            placeholder="CNH"
                        />
                    </Form>
                    
                    <Button 
                        title="Cadastrar"
                    />

                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}