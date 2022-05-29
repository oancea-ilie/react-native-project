import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useEffect } from "react/cjs/react.development";
import { COLORS, SIZES } from "../utils/theme";
import images from "../utils/images";

const Thanks = ({navigation}) => {

    const [sec, setSec] = useState(5);

    useEffect(()=>{
        if(sec > 0){

            setTimeout(() => {
                setSec(prev=> prev-1);
            }, 1000);

        }

        if(sec == 0){
            navigation.navigate('Home');
        }

    },[sec])

    return (
      <View style={{alignItems:'center', justifyContent:'center', height:'100%', width:'100%', backgroundColor:COLORS.primary}}>
          <Image source={images.checkCircle} style={{ width:100, height:100}}/>
          <Text style={{fontSize:SIZES.extraLarge, color:COLORS.white}}>Thanks For Your reservation !</Text>
          <Text style={{fontSize:SIZES.extraLarge, color:COLORS.white}}>Redirect in {sec}</Text>
      </View>
    );
}



export default Thanks