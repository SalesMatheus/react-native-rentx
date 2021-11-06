import React from 'react';
import LottieView from 'lottie-react-native';

import loadingAnimation from '../../assets/loading_animation.json';

import {
  Container
} from './styles';

export function LoadAnimation() {
  return (
    <Container>
        <LottieView 
            source={loadingAnimation}
            style={{ height: 200 }}
            resizeMode="contain"
            autoPlay
            loop
        />
    </Container>
  );
}