import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from './../../config/FirebaseConfig';
import { use } from 'react';
import { FlatList } from 'react-native-web';
export default function Slider() {
const [sliders,setSliders]=useState([]);
    useEffect(() => {
      getSliders()
    },[])
    const getSliders=async()=>{
     setSliders([]);
      const snapshot = await getDocs(collection(db, "Sliders"));
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setSliders(sliders=>[...sliders,doc.data()]);
      });
    }
  return (
    <View>
      <FlatList
        data={sliders}
        horizontal={true}
        renderItem={({item})=>(
          <View>
            <Image source={{uri:item?.imageUrl}} style={{width:Dimensions.get('screen').width*0.9,height:160,borderRadius:15}}/>
            <Text>{item.name}</Text>
          </View>       
        )}
      />
    </View>
  )
}