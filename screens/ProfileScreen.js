import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import UserCard from '../components/UserCard';
import Badges from '../components/Badges';
import UCList from '../components/UCList';
import { fetchUsuario, fetchSenacCoin, fetchBadge, fetchEstudante, fetchUnidadesCurriculares } from '../services/api';

const ProfileScreen = () => {
  const userId = '3b700ecc-cec9-4be4-8c00-48bced543861'; // Substitua pelo ID do usuário

  const [user, setUser] = useState([]);
  const [senacCoin, setSenacCoin] = useState([]);
  const [badges, setBadges] = useState([]);
  const [estudante, setEstudante] = useState([]);
  const [unidadesCurriculares, setUnidadesCurriculares] = useState([]);
  //

  useEffect(() => {
    const fetchData = async () => {
      setUser(await fetchUsuario(userId));

      setSenacCoin(await fetchSenacCoin(userId));

      var bds = await fetchBadge();
      setBadges(bds.slice(0, 3));

      setEstudante(await fetchEstudante(userId));

      setUnidadesCurriculares(await fetchUnidadesCurriculares(1));
    };

    fetchData();
  }, []);

  return (
    <View>
      <UserCard user={user} senacCoin={senacCoin} level={user.status} />
      <Badges badges={badges}/>
      <UCList ucs={unidadesCurriculares} />

    </View>
  );
};

export default ProfileScreen;
