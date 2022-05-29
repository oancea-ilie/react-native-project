import { View, Text } from 'react-native'
import { TitleCard, PriceCard } from './SubInfo'
import { COLORS, SIZES } from '../utils/theme'
import { useState } from 'react'

const DetailsDesc = ({data}) => {

  const [text, setText] = useState(data.description.slice(0,100));

  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <TitleCard 
          title={data.name} 
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <PriceCard price={data.price} />
      </View>
      <View style={{marginVertical:SIZES.extraLarge *1.5}}>
        <Text style={{
          fontWeight:'600',
          fontSize:SIZES.font,
          color: COLORS.primary,
        }}
        >
          Description
          </Text>
        <View style={{marginTop:SIZES.base}}>
          <Text style={{
            fontSize:SIZES.small,
            color: COLORS.secondary,
            lineHeight:SIZES.large,
          }}
          >
            {text}
            {readMore == false && '... '}
            <Text
              onPress={()=>{
                if(readMore == false){
                  setText(data.description);
                  setReadMore(true);
                }else{
                  setText(data.description.slice(0,100));
                  setReadMore(false);
                }
              }}
              style={{
                fontSize:SIZES.small,
                fontWeight:'700',
                color: COLORS.primary,
              }}>
                {readMore ? ' Show Less' : 'Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc