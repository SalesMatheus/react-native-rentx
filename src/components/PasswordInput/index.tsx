import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components'
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  Container,
  IconContainer,
  InputText
} from './styles';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput({ iconName, ...rest }: Props) {
    const [passwordVisibled, setPasswordVisibled] = useState(true);

    const theme = useTheme();

    function handlePasswordVisibilityChange() {
        setPasswordVisibled(prevState => !prevState)
    }

    return (
        <Container>
            <IconContainer>
                <Feather
                    name={iconName}
                    size={24}
                    color={theme.colors.text_details}
                />
            </IconContainer>
            <InputText  
                {...rest}
                secureTextEntry={passwordVisibled}
            />

            <BorderlessButton onPress={handlePasswordVisibilityChange}>
                <IconContainer>
                    <Feather
                        name={!passwordVisibled ? "eye" : 'eye-off'}
                        size={24}
                        color={theme.colors.text_details}
                    />
                </IconContainer>
            </BorderlessButton>
        </Container>
    );
}