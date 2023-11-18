import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    containerHeader: {
        width:'100%',
        height: 92,
        backgroundColor: '#b2b2b2',
        borderRadius: 3,
    },
    container:{
        backgroundColor: '#000000',
        width: '100%' ,
        height: '100%',
        padding: 12, 
    },
    containerText:{
        color:'white',
        fontSize: 35,
        fontWeight:'bold',
        paddingBottom: 15,
        paddingTop: 30
    },  
    containerText2:{
        color:'white',
        fontSize: 20,
        padding: 8,
    },
    containerText3:{
        color:'white',
        fontSize: 20,
        padding: 8,
    },
    img:{
        width: 17,
        height: 22,
        marginRight: 20,
        marginTop: 15,
    },
    border:{
        borderWidth: 5,
        borderBottomColor: 'white',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    containerBottom:{
        borderWidth: 5,
        borderColor: 'white',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
    },
    bottom:{
        flexDirection: 'row'
    },
    containerText4: {
        fontSize:15,
        color:'white',
        paddingTop: 20,
    },
    button:{
        width:'30%',
        height: 40,
        backgroundColor:'#b2b2b2',
        justifyContent: 'center',
        borderRadius: 40,
        alignItems: 'center',
        marginLeft: '32%',
        marginTop: 40
    },
    textButton:{
        fontWeight: 'bold',
        color: '#212121'
    }
})
