import { View, Text, Image } from 'react-native'
import { COLORS, SIZES } from '../utils/theme'
import { PriceCard } from './SubInfo'

const DetailsBooks = ({item}) => {

  return (
    <View style={{
      width: '100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:"center",
      marginVertical:SIZES.base,
      paddingHorizontal: SIZES.base * 2,
    }}>
      <Image 
        source={item.image}
        resizeMode="contain"
        style={{width:48, height:48, borderRadius:50}}
        />
        <View>
          <Text style={{
            fontSize:SIZES.small,
            color: COLORS.primary,
            fontWeight:'600',
          }}>
            Booked by {item.name}
          </Text>
          <Text style={{
            fontSize:SIZES.small -2,
            color: COLORS.secondary,
            fontWeight:'400',
            marginTop: 3,
          }}>
            {item.date}
          </Text>
        </View>

        <PriceCard price={item.price} />
    </View>
  )
}

export default DetailsBooks