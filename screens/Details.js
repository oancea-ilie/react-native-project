import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { RectButton } from '../components/Button'
import { SubInfo } from '../components/SubInfo'
import {  DetailsDesc } from '../components'
import { COLORS, SHADOWS, SIZES } from '../utils/theme'
import React from 'react'
import DetailsBooks from '../components/DetailsBooks'
import DetailsHeader from '../components/DetailsHeader'

const Details = ({route, navigation }) => {
  
  const {data,isPress} = route.params;
  
  const handlePress = ()=>{
    navigation.navigate('Thanks');
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      {/* BOOK NOW BTN */}
      <View style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical:SIZES.font,
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:"rgba(255,255,255,0.5)",
          zIndex: 1,
        }}>
          <RectButton text={"Book Now"} minWidth={170} handlePress={handlePress} fontSize={SIZES.large} {...SHADOWS.dark} navigation={navigation}/>
      </View>

        {/* card */}
      <FlatList
        data={data.reservations}
        renderItem={({item}) => <DetailsBooks item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:SIZES.extraLarge * 3}}
        ListHeaderComponent = {()=> (
          <>
            <DetailsHeader data={data}  isPress={isPress} navigation = {navigation}/>
            <SubInfo reservations={data.reservations} />
            <View style={{padding:SIZES.font}}>
              <DetailsDesc data ={data} />
              { data.reservations.length > 0 &&
                (
                  <Text style={{
                    fontSize:SIZES.font,
                    color: COLORS.primary,
                    fontWeight:'600',
                  }}
                  >
                    Last reservations:
                  </Text>
                )
              }
            </View>
          </>
        )}
      />

    </SafeAreaView>
  )
}

export default Details