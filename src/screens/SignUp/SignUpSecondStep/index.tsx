import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import {
    Container,
    Header,
    Steps,
    Form,
    FormTitle
} from './styles';

export function SignUpSecondStep() {
    const navigation = useNavigation();
    const theme = useTheme();

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
                            <Bullet/>
                            <Bullet active/>
                        </Steps>
                    </Header>
                    <Form>
                        <FormTitle>02. Dados</FormTitle>

                        <PasswordInput 
                            iconName="lock"
                            placeholder="Senha"
                        />
                        <PasswordInput 
                            iconName="lock"
                            placeholder="Repetir senha"
                        />
                    </Form>
                    
                    <Button 
                        title="Cadastrar"
                        color={theme.colors.success}
                    />

                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}