import { View, Text, Dimensions, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './../../config/FirebaseConfig';

export default function Slider() {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "Sliders"));
            const fetchedSliders = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log(fetchedSliders); // Debug here
            setSliders(fetchedSliders);
          } catch (error) {
            console.error('Error fetching sliders:', error);
          }
        };
        fetchData();
      }, []);
      
  

    return (
        <View>
            <FlatList
                data={sliders}
                horizontal={true}
                keyExtractor={(item) => item.id} // Add a key extractor
                renderItem={({ item }) => (
                    <View>
                        
                        <Image
                            source={{ uri: item?.imageUrl }}
                            style={{
                                width: Dimensions.get('screen').width * 0.9,
                                height: 160,
                                borderRadius: 10,
                            }}
                        />
                    </View>
                )}
            />
        </View>
    );
}
