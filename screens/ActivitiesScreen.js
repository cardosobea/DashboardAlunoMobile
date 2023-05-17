import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import { fetchAtividade } from '../services/api';

const ActivitiesScreen = () => {
  const [activities, setActivities] = useState([]);
  const userId = '3b700ecc-cec9-4be4-8c00-48bced543861'; // Substitua pelo ID do usuário

  useEffect(() => {
    const fetchData = async () => {
      setActivities(fetchAtividade());
    };

    fetchData();
  }, []);

  return (
    <View>
      {activities.map((activity) => (
        <View key={activity.id}>
          <Text>{activity.descricao}</Text>
          <Text>Data de início: {activity.dataInicio}</Text>
          <Text>Data de término: {activity.dataFim}</Text>
        </View>
      ))}
    </View>
  );
};

export default ActivitiesScreen;
