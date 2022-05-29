import { View, SafeAreaView, FlatList } from 'react-native'
import {useState} from 'react'
import {COLORS } from "../utils/theme"
import { DATA } from '../utils/data'
import { Card, HomeHeader } from '../components'
import { StatusBar } from 'expo-status-bar'

const Home = () => {

  const [cards, setCards] = useState(DATA);

  const handleSearch = (value)=>{

    if(value.length == 0){
      return setCards(DATA);
    }
    const filter = DATA.filter((e)=>
      e.name.toLowerCase().includes(value.toLowerCase())
    );

    if(filter.length > 0){
      setCards(filter);
    }else{
      setCards(DATA);
    }

  }
  
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <View style={{flex: 1 }}>
        <View style={{zIndex: 0}}>
          <FlatList 
            data={cards}
            renderItem={({item})=> <Card data={item} /> }
            keyExtractor={ (item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
          {/* overlay */}
          <View style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex:-1,
            }}>
              <View style={{height: 360, backgroundColor: COLORS.primary}} />
              <View style={{flex: 1, backgroundColor: COLORS.white}} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home