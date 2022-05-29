import { Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../utils/theme'

export const CircleButton = ({imgUrl,handlechangeColor, isPress, handlePress, ...props}) => {

  return (
    <TouchableOpacity
        style={{
            width: 40,
            height: 40,
            backgroundColor: isPress == true ? COLORS.secondary :'white',
            position: 'absolute',
            borderRadius:SIZES.extraLarge,
            alignItems:"center",
            justifyContent:"center",
            ...SHADOWS.light,
            ...props,
        }}
        onPress={ handlechangeColor ? handlechangeColor : handlePress}
    >
        <Image 
            source={imgUrl}
            resizeMode="contain"
            style={{width:24,height:24}}
        />
    </TouchableOpacity>
  )
}

export const RectButton = ({text,minWidth, fontSize, handlePress, ...props }) => {
  
    return (
      <TouchableOpacity
        style={{
            backgroundColor:COLORS.primary,
            borderRadius:SIZES.extraLarge,
            minWidth: minWidth,
            padding: SIZES.small,
            ...props,
        }}
        onPress={handlePress}
      >
        <Text
          style={{
            fontSize:fontSize,
            color: COLORS.white,
            textAlign:"center",
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    )
}