import { ImageSourcePropType, StyleSheet, Text, View, Image, Pressable, StatusBar } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

import ReactNativeHapticFeedback from "react-native-haptic-feedback";


import DiceOne from '../assets/one.png' // Importing These things will give errors(will not harm the O/P display) because typescript doesn't know png/svg/etc type declaration. To solve this problem we can create a file in the src folder named "index.d.ts" and use declare module "*.png"
import DiceTwo from '../assets/two.png'
import DiceThree from '../assets/three.png'
import DiceFour from '../assets/four.png'
import DiceFive from '../assets/five.png'
import DiceSix from '../assets/six.png'

// We can pass source links to every single image but we can use propsWithChildren to do it more comfortably.
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

// making a function where we will use Image so that we can use this function whenever we want to use our images.

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage} 
      source={imageUrl}
      />
    </View>
  )
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const App = () => {
                                      // <Exact type of the variable what we need to pass>
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);

  }
  return (
    
    <View style={styles.container}>
      <StatusBar backgroundColor={'aqua'} />
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({

container: {
  flex : 1,
  alignItems : 'center',
  justifyContent : 'center',
  backgroundColor: "#FFF2F2",
},
diceContainer: {
  margin: 12,
},
diceImage: {
  width: 200,
  height: 200,
},
rollDiceBtnText: {
  paddingVertical: 10,
  paddingHorizontal: 40,
  borderWidth: 2,
  borderRadius : 8,
  borderColor: '#E5E0FF',
  fontSize: 12,
  color: 'black',
  fontWeight: '700',
  textTransform: 'uppercase',
  backgroundColor: 'white',
}


})