import { Text, View } from 'react-native';
import { CardHeaderView, CardHeaderImage, CardHeaderTitle, CardInfoView } from './styles';
import CardItem from '../card-item/CardItem';

const CountryCard = ( {country} ) => {
    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
        <CardHeaderView>
            <CardHeaderImage> {country.emoji} </CardHeaderImage>
            <CardHeaderTitle> {country.name} </CardHeaderTitle>
         </CardHeaderView>
        <CardInfoView>
            <CardItem title={"Continent: "} values={[country.continent.name]}/>
            <CardItem title={"Languages: "} values={country.languages.map((item) => {return item.name})}/>
            <CardItem title={"Currency: "} values={[country.currency]}/>
            <CardItem title={"Phone: "} values={[`+${country.phone}`]}/>
        </CardInfoView>
       </View>
    );
}

export default CountryCard;