import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

import logoImg from '../../assets/logo.png';
import { IncidentsInterface } from '../../interfaces/IncidentInterface';
import api from '../../services/api';
import {
  Container,
  Description,
  Header,
  HeaderText,
  HeaderTextBold,
  Image,
  Title,
  IncidentProperty,
  IncidentslistChildren,
  IncidentValue,
  Button,
  TextButton,
  StyledFlatList,
} from './styles';

const Incidents = () => {
  const [incidents, setIncidents] = useState<IncidentsInterface[]>([]);
  const navigation = useNavigation();
  const navigate = (incident: IncidentsInterface) => {
    navigation.navigate('Details', { incident });
  };
  const loadIncidents = async () => {
    await api
      .get<IncidentsInterface[]>('/casos')
      .then((response) => setIncidents(response.data));
  };
  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de
          <HeaderTextBold> 0 casos</HeaderTextBold>
        </HeaderText>
      </Header>
      <Title>Bem vindo !</Title>
      <Description>
        Escolha um dos casos abaixo para ajudar e seja um heroi{' '}
      </Description>

      <StyledFlatList
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <IncidentslistChildren>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>
            <IncidentProperty>Caso:</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>
            <IncidentProperty>valor:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </IncidentValue>
            <Button
              onPress={() => {
                navigate(incident);
              }}
            >
              <TextButton>Ver mais detalhes</TextButton>
            </Button>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </IncidentslistChildren>
        )}
      />
    </Container>
  );
};

export default Incidents;
