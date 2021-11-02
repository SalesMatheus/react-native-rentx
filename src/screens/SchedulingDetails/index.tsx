import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetail,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
      navigation.navigate('SchedulingComplete');
  }

  function handleBack(){
    navigation.goBack();
  }


  return (
      <Container>
          <Header>
              <BackButton onPress={handleBack}/>
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
              
              <Accessories>
                  <Accessory name="380km/h" icon={SpeedSvg} />
                  <Accessory name="3.2s" icon={AccelerationSvg} />
                  <Accessory name="800 HP" icon={ForceSvg} />
                  <Accessory name="Gasolina" icon={GasolineSvg} />
                  <Accessory name="Auto" icon={ExchangeSvg} />
                  <Accessory name="2 pessoas" icon={PeopleSvg} />
              </Accessories>
              
              <RentalPeriod>
                <CalendarIcon>
                  <Feather 
                    name="calendar"
                    size={RFValue(24)}
                    color={theme.colors.shape}
                  />
                </CalendarIcon>

                <DateInfo>
                  <DateTitle>DE</DateTitle>
                  <DateValue>18/06/2021</DateValue>
                </DateInfo>
                <Feather 
                  name="chevron-right"
                  size={RFValue(24)}
                  color={theme.colors.text}
                />
                <DateInfo>
                  <DateTitle>ATÉ</DateTitle>
                  <DateValue>18/06/2021</DateValue>
                </DateInfo>
              </RentalPeriod>

              <RentalPrice>
                <RentalPriceLabel>TOTAL</RentalPriceLabel>
                <RentalPriceDetail>
                  <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                  <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                </RentalPriceDetail>
              </RentalPrice>
          </Content>
          
          <Footer>
              <Button 
                title="Alugar agora" 
                onPress={handleConfirmRental}
                color={theme.colors.success}
              />
          </Footer>
      </Container>
  );
}