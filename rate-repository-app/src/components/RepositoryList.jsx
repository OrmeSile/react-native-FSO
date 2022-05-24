import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import TextInput from './TextInput';
import { formTheme } from '../theme';
import React from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  textField: formTheme.textField,
  container: formTheme.container,
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { setFilter, filter, selectedSorting, handleSort } = this.props;
    return (
      <View>
        <FilterInput setFilter={setFilter} filter={filter} />
        <SortFilter selectedSorting={selectedSorting} handleSort={handleSort} />
      </View>
    );
  };

  render() {
    const { repositories, onEndReach, navigate } = this.props;

    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader()}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
              <RepositoryItem key={item.id} item={item} />
            </Pressable>
          </View>
        )}
      />
    );
  }
}

const FilterInput = ({ setFilter, filter }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textField}
        placeholder='filter...'
        onChangeText={(value) => {
          setFilter(value);
        }}
      >
        {filter}
      </TextInput>
    </View>
  );
};

const SortFilter = ({ selectedSorting, handleSort }) => {
  return (
    <Picker
      selectedValue={selectedSorting}
      onValueChange={(itemValue) => handleSort(itemValue)}
    >
      <Picker.Item label='Latest repositories' value='latest' />
      <Picker.Item label='Highest rated repositories' value='highest' />
      <Picker.Item label='Lowest rated repositories' value='lowest' />
    </Picker>
  );
};

const RepositoryList = () => {
  const { repositories, refetch, fetchMore } = useRepositories({
    first: 8
  });
  const [filter, setFilter] = useState();
  const [debouncedFilter] = useDebounce(filter, 500);
  const navigate = useNavigate();

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
        return refetch({ ...sortValues.latest });
      case 'highest':
        setSelectedSorting(value);
        return refetch({ ...sortValues.highest });
      case 'lowest':
        setSelectedSorting(value);
        return refetch({ ...sortValues.lowest });
      default:
        console.error(value);
    }
  };

  useEffect(() => {
    const filteredQuery = async () =>
      await refetch({ searchKeyword: debouncedFilter });
    filteredQuery();
  }, [debouncedFilter]);

  const onEndReach = () => {
    fetchMore();
  };

  const [selectedSorting, setSelectedSorting] = useState();
  return (
    <View style={{ flex: 1 }}>
      <RepositoryListContainer
        filter={filter}
        setFilter={setFilter}
        selectedSorting={selectedSorting}
        handleSort={handleSort}
        repositories={repositories}
        onEndReach={onEndReach}
        navigate={navigate}
      />
    </View>
  );
};

export default RepositoryList;
