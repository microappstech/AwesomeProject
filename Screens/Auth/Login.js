import { Text, View , StyleSheet, TextInput} from "react-native";
import Header from "../../Components/Header";

function Login() {
    return ( 
        <View style={{textAlign:"left"}}>
            <Header/>
            <View  >
                <View style={styles.row}>
                    <Text style={{textAlign:"left"}}>Identifiant : </Text>
                    <TextInput style={styles.input}/>
                </View>
                
                <View style={styles.row}>
                    <Text>Identifiant : </Text>
                    <TextInput style={styles.input}/>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:6
    },
    left:{
        textAlign:"left"
    },
    input:{
        borderColor:"gray",
        borderStyle:"solid",
        borderWidth:0.8,
        width:300,
        borderRadius:7,
    }
 })

export default Login;