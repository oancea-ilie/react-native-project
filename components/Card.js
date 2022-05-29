import { View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS } from '../utils/theme'
import images from '../utils/images'
import { CircleButton, RectButton } from './Button'
import { TitleCard, PriceCard, SubInfo } from './SubInfo'
import { useState } from 'react/cjs/react.development'

const Card = ({data}) => {
  
  const navigation = useNavigation();
  
  const [isPress, setIsPress] = useState(false);

  const handlechangeColor = () =>{
    setIsPress(!isPress);
  }

  return (
    <View style={{
      backgroundColor:COLORS.white,
      borderRadius:SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{width:"100%", height:250}}>
        <Image 
          source={data.image}
          resizeMode="cover"
          style={{ 
            width:"100%",
            height:"100%", 
            borderTopLeftRadius:SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
        />
        <CircleButton imgUrl={images.heart} right={10} top={10} handlechangeColor={handlechangeColor} isPress={isPress} />
      </View>

      <SubInfo reservations={data.reservations} />

      <View style={{width:"100%", padding:SIZES.font}}>
        <TitleCard 
          title={data.name} 
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize = {SIZES.small}
        />
        <View style={{
          marginTop:SIZES.font,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center"
        }}>
          <PriceCard price={data.price}/>
          <RectButton
            text={"View Details"}
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={()=> navigation.navigate('Details', { data, isPress })}
          />
        </View>
      </View>
      
    </View>
  )
}

export default Card