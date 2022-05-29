import { View, Image, StatusBar } from 'react-native'
import { CircleButton } from './Button'
import images from '../utils/images';

const DetailsHeader = ( {data, navigation, isPress})=>(
    <View style= {{ width: '100%', height: 350}}>
      <Image source={data.image} resizeMode="cover" 
        style={{ width:'100%', height:"100%"}}/>
      <CircleButton
        top={StatusBar.currentHeight + 10}
        left={5}
        imgUrl={images.left}
        handlePress = { () => navigation.goBack()} 
      />
      <CircleButton
        isPress={isPress}
        top={StatusBar.currentHeight + 10}
        right={5}
        imgUrl={images.heart}
      />
    </View>
)

export default DetailsHeader;