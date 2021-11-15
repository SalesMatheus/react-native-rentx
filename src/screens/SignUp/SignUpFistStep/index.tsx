import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import * as Yup from 'yup';
import { useAuth } from '../../../hooks/auth';

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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnh, setCnh] = useState('');

    const navigation = useNavigation();
    const { user } = useAuth();

    function handleBack(){
        navigation.goBack();
    };

    async function handleNextStep(){
        try {
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required('Nome é obrigatório'),
                email: Yup.string()
                    .required('E-mail é obrigatório')
                    .email('Digite um e-mail válido'),
                cnh: Yup.string()
                    .required('CNH é obrigatória')
            });
        
            const data = { name, email, cnh };
            await schema.validate(data);

            navigation.navigate('SignUpSecondStep', { user: data });
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert('Opa', error.message);
            }else{
                Alert.alert(
                    'Erro no cadastro', 
                    'Ocorreu um erro ao realizar o cadastro, verifique suas informações.'
                );
            }
        }
    };

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
                        <FormTitle>01. Dados</FormTitle>
                        <Input 
                            iconName="user"
                            placeholder="Nome"
                            autoCorrect={false}
                            onChangeText={setName}
                            value={name}
                        />
                        <Input 
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            value={email}
                        />
                        <Input 
                            iconName="credit-card"
                            placeholder="CNH"
                            keyboardType="numeric"
                            onChangeText={setCnh}
                            value={cnh}
                        />
                    </Form>
                    
                    <Button 
                        title="Próximo"
                        onPress={handleNextStep}
                    />

                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}