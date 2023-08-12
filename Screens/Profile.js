import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image
        style={styles.profilePicture}
        source={require('../assets/profilePic.png')}
      />
        <View>
          <Text style={{fontSize:15,fontWeight:'700',marginBottom:4}}>Marry Doe</Text>
          <Text>Marry@Gmail.Com</Text>
        </View>
      </View>

      <Text style={{width:'90%',height:100,marginTop:25,fontSize:14,color:'grey'}}>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop:40
  },

  card:{
   display:'flex',
   flexDirection:'row',
   marginRight:100
  },

  profilePicture:{
    width:80,
    height:80,
    marginRight:20
  }
})