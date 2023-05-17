import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';

const ActivitiesList = ({activities}) => {
  const renderItem = ({item}) => (
    <ListItem bottomDivider>
      <Icon name="tasks" type="font-awesome" color="#517fa4" />
      <ListItem.Content>
        <ListItem.Title>{item.descricao}</ListItem.Title>
        <ListItem.Subtitle>Data de início: {item.dataInicio}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron/>
    </ListItem>
  );

  return (
    <View>
      <Text style={styles.title}>Próximas atividades</Text>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ActivitiesList;
