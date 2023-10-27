import { Text, View } from 'react-native';
import { CardHeaderView, CardHeaderImage, CardHeaderTitle, CardInfoView } from '../country-card/styles';
import CardItem from '../card-item/CardItem';
import { Ionicons } from '@expo/vector-icons';

const InfoCard = () => {
    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
        <CardHeaderView>
            <Ionicons
              name="analytics-outline" // Set the icon names based on the tab's focus state
              size={100}
              color={"grey"}
              style={{alignSelf: 'center'}}
            />
            <CardHeaderTitle> About </CardHeaderTitle>
         </CardHeaderView>
        <CardInfoView>
            <CardItem title={"Countries GraphQL API "} values={["A public GraphQL API for information about countries, continents, and languages. This project uses Countries List and provinces as data sources."]}/>
        </CardInfoView>
       </View>
    );
}

export default InfoCard;