/* eslint-disable import/extensions */
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import React from 'react';
import { ScrollView, Linking } from 'react-native';

import logoImg from '../../assets/logo.png';
import { IncidentsInterface } from '../../interfaces/IncidentInterface';
import {
  Container,
  Header,
  Image,
  Button,
  IncidentProperty,
  IncidentValue,
  IncidentBox,
  ActionButton,
  Actions,
  Contact,
  TextActionButton,
  ContactBox,
  HeroTitle,
} from './styles';

const Details = () => {
  const route = useRoute();
  const { incident } = route.params;
  const messege = 'Olá Ong , estou entrando em contato com vc, Spou um heroi';
  const navigation = useNavigation();
  const sendEmail = () => {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title} `,
      recipients: [`${incident.email}`],
      body: messege,
    });
  };
  const sendWpp = () => {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${messege}`
    );
  };
  const navigate = () => {
    navigation.navigate('Incidents');
  };
  return (
    <ScrollView>
      <Container>
        <Header>
          <Image source={logoImg} />
          <Button onPress={navigate}>
            <Feather name="arrow-left" size={25} color="#E02041" />
          </Button>
        </Header>
        <IncidentBox>
          <IncidentProperty>ONG:</IncidentProperty>
          <IncidentValue>{incident.name}</IncidentValue>
          <IncidentProperty>Descrição</IncidentProperty>
          <IncidentValue>{incident.title}</IncidentValue>
          <IncidentProperty>valor:</IncidentProperty>
          <IncidentValue>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(incident.value)}
          </IncidentValue>
        </IncidentBox>

        <ContactBox>
          <HeroTitle>Salve o dia !</HeroTitle>
          <HeroTitle>Seja o herói de caso.</HeroTitle>
          <Contact>Ente em Contato:</Contact>
          <Actions>
            <ActionButton onPress={sendWpp}>
              <TextActionButton>WhatsApp</TextActionButton>
            </ActionButton>
            <ActionButton onPress={sendEmail}>
              <TextActionButton>Email</TextActionButton>
            </ActionButton>
          </Actions>
        </ContactBox>
        <ScrollView />
      </Container>
    </ScrollView>
  );
};

export default Details;
