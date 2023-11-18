import {Text, TextInput, View, Image, TouchableOpacity,Button} from 'react-native'
import seta from "./src/assets/image/seta-direita.png"
import { styles } from './styles2'

function App (){   
    return (
    <View style={styles.container}>
        <Text style={styles.containerText}>Insira um número de telefone</Text>
        <View style={styles.containerHeader}>
            <View style={styles.border}>
                <Text style={styles.containerText2}>Brasil</Text>
                <Image style={styles.img} source={seta}/>
            </View>
            <View style={styles.bottom}>
                <View style={styles.containerBottom}>
                    <Text style={styles.containerText2}>+55</Text>
                </View>
                <View>
                    <TextInput placeholder= '  (11) 96123-4567' style={styles.containerText2}/>
                </View>
            </View>
        </View>
        <View>
            <Text style={styles.containerText4}>Vamos enviar um código por SMS para confirmar seu número de telefone.</Text>
            <Text style={styles.containerText4}>É possivel que enviemos mensagens relacionadas a serviços de vez em quando.</Text>
        </View>
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.textButton} >Avançar</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}
export default App;

