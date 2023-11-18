import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f0f0f',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header: {
      width: '100%',
      height: 75,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginHorizontal: 10
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 999,
      marginLeft: 4,
    },
    headerItem: {
      backgroundColor: '#2a2a2a',
      width: 65,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
    },
    text: {
      color: 'white',
    },
    playList: {
      width: '100%',
      flexDirection: 'row',
      borderRadius: 8,
    },
    imagePlayList: {
      width: 60,
      height: 50,
      overflow: 'hidden'
    },
    textPlayList: {
      width: 180,
      backgroundColor: '#2a2a2a',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginLeft: 7,
      height: 50,
      borderRadius: 8,
    },
    textPlayList2: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    text2: {
      color: 'white',
      width: '100%'
    },
    image2: {
      width: 150,
      height: 150,
    },
    image2Father: {
      flexDirection: 'row',
      gap: 30,
    },
    textStyle: {
      color: '#878787',
      flexDirection: 'row',
    },
    footerText: {
      color: 'white'
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'70%',
      marginBottom: 20,
    },
    footerChild: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  