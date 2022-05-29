import { View, Text,Image } from 'react-native'
import images from '../utils/images'
import { COLORS, SHADOWS, SIZES } from '../utils/theme'

export const TitleCard = ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text 
        style={{
          fontWeight:"700",
          fontSize:titleSize,
          color: COLORS.primary,
        }}>
          {title}
      </Text>
      <Text 
        style={{
          fontWeight:"500",
          fontSize:subTitleSize,
          color: COLORS.primary,
        }}>
          {subTitle}
      </Text>
    </View>
  )
}

export const PriceCard = ({price}) => {
    return (
      <View style={{
        flexDirection:"row",
        alignItems:"center",
      }}>
        <Image 
          source={images.eth}
          resizeMode="contain"
          style={{width:20, height:20, marginRight:2}}
        />
        <Text style={{
          fontWeight: "bold",
          fontSize:SIZES.font,
          color: COLORS.primary,
        }}>
          {price} / day
        </Text>
      </View>
    )
}

export const ImageCard = ({imgUrl, index}) => {
    return (
      <Image 
        source={imgUrl}
        resizeMode="contain"
        style={{
          borderRadius:50,
          width : 48,
          height: 48,
          marginLeft: index == 0? 0 : -SIZES.font
        }}
      />
    )
}

export const PeopleCard = ({reservations}) => {
    return (
      <View style={{flexDirection:"row"}}>
        {
            reservations
            .map( (item,index) => (
                <ImageCard imgUrl={item.image} index={index} key={`P-${index}`}/>
            ))
        }
      </View>
    )
}

export const Discount = () => {
    return (
      <View style={{
          paddingHorizontal:SIZES.font,
          paddingVertical: SIZES.base,
          backgroundColor: 'red',
          justifyContent:"center",
          alignItems:"center",
          elevation:1,
          ...SHADOWS,
          borderRadius:SIZES.base -4
      }}
      >
        <Text style={{ fontWeight:"500", fontSize:SIZES.small, color:COLORS.white}}>Discount</Text>
        <Text style={{ fontWeight:"700", fontSize:SIZES.small, color:COLORS.white }}>20%</Text>
      </View>
    )
}

export const SubInfo = ({reservations}) => {
    return (
      <View style={{
          width: '100%',
          paddingHorizontal:SIZES.font,
          marginTop:-SIZES.extraLarge,
          flexDirection:"row",
          justifyContent:"space-between"
        }}>
        <PeopleCard reservations={reservations}/>
        <Discount />
      </View>
    )
}
  
  
  
