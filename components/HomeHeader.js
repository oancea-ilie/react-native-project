import { View, Text, Image, TextInput } from 'react-native'
import images from '../utils/images'
import { COLORS, SIZES } from '../utils/theme'

const HomeHeader = ({onSearch}) => {
  return (
    <View style={{
      backgroundColor:COLORS.primary,
      padding: SIZES.font,
      }}>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        }}>
          {/* logo */}
        <Image 
          source={images.logo}
          resizeMode="contain"
          style={{ width: 150, height:25}}
        />
        {/* user icon */}
        <View style={{width:45, height:45}}>
          <Image 
            source={images.me} 
            resizeMode="contain"
            style={{ width: '100%', height:"100%" ,borderRadius: 50}}
          />
          <Image 
            source={images.badge} 
            resizeMode="contain"
            style={{ position:"absolute", width:15, height:15 , bottom:0, right:0}}
          />
        </View>
      </View>

      <View style={{marginVertical:SIZES.font}}>
        <Text style={{fontSize: SIZES.small, color:COLORS.white}}>Hellow, user </Text>
        <Text style={{fontWeight:"bold", fontSize: SIZES.large, color:COLORS.white , marginTop:SIZES.base / 2}}>Let's find your apartment ✌️</Text>
      </View>
      
      {/* search box*/}
      <View style={{marginTop:SIZES.font}}>
        <View style={{
          width: '100%',
          borderRadius:SIZES.font,
          backgroundColor:COLORS.secondary,
          flexDirection:'row',
          alignItems:"center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2,
        }}>
          <Image source={images.search} resizeMode="contain" style={{width:20, height:20, marginRight: SIZES.base}}/>
          <TextInput 
            placeholderTextColor={'white'}
            placeholder='Search apartment..'
            style={{flex: 1, color:'white', fontSize:SIZES.medium}}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader