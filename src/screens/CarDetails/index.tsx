import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About
} from './styles';

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>

            <CarImage>
                <ImageSlider imagesUrl={['https://pngimg.com/uploads/audi/audi_PNG99482.png']}/>
            </CarImage>

            <Content>
                <Details>
                    <Description>
                        <Brand>Audi</Brand>
                        <Name>TT</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 1500</Price>
                    </Rent>
                </Details>

                <About>
                    Este é automóvel desportivo. Surgiu do lendário 
                    touro de lide indultado 
                    na praça Real Maestranza de sevilla. 
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    );
}