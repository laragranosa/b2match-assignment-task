import { View, TouchableOpacity } from 'react-native';
import { ListItemImage, ListItemTitle, ListItemView } from './styles';

const ListItem = ({ item, navigation }) => (
    <TouchableOpacity style={ListItemView.button} onPress={() => navigation.navigate('CountryScreen', { item })}>
        <ListItemImage>{item.emoji}</ListItemImage>
        <ListItemTitle>{item.name}</ListItemTitle>
    </TouchableOpacity>
);

export default ListItem;