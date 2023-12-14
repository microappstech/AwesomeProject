import { Image,View,Text, StyleSheet } from "react-native";


function Header() {
    return ( 
        <View style={styles.row}>
            <Image style={{width:100,height:100}} source={require("../assets/images/Logo.jpeg")}/>
            <Text style={{color:"#13146A",fontSize:40,paddingTop:30,fontWeight:"bold"}}>Modco</Text>
        </View>
     );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    container:{
        flex:1,
        marginTop:10
    }
})
export default Header;