import { Text, View } from 'react-native';
import { CardItemTitle, CardItemData, CardInfoView } from './styles';

const CardItem = ( {title, values} ) => {
    return (
        <>
        <CardItemTitle>{title}</CardItemTitle>
        <View>
            {values.map((item, index) => {return <CardItemData key={index}>{item}</CardItemData>})}
        </View>
        </>
    );
}

export default CardItem;