import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View>
          <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
            <RepositoryItem key={item.id} item={item} />
          </Pressable>
        </View>
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories, refetch } = useRepositories();
  const sortValues = {
    latest: {
      orderBy: 'CREATED_AT',
    },
    highest: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    },
    lowest: {
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
    },
  };
  const handleSort = async (value) => {
    switch (value) {
      case 'latest':
        setSelectedSorting(value);
        console.log(sortValues.latest);
        return await refetch({ variables: sortValues.latest });
      case 'highest':
        setSelectedSorting(value);
        return await refetch({ variables: sortValues.highest });
      case 'lowest':
        setSelectedSorting(value);
        return await refetch({variables:  sortValues.lowest });
      default:
        console.error(value);
    }
  };

  const [selectedSorting, setSelectedSorting] = useState();
  console.log(selectedSorting);
  return (
    <View style={{ flex: 1 }}>
      <Picker
        selectedValue={selectedSorting}
        onValueChange={(itemValue) => handleSort(itemValue)}
      >
        <Picker.Item label='Latest repositories' value='latest' />
        <Picker.Item label='Highest rated repositories' value='highest' />
        <Picker.Item label='Lowest rated repositories' value='lowest' />
      </Picker>
      <RepositoryListContainer repositories={repositories} />
    </View>
  );
};

export default RepositoryList;
