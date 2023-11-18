import { StyleSheet, Text, View, Image } from 'react-native';
import fotoFil from "./src/assets/image/filipi.png"
import fotoOldRock from "./src/assets/image/OldRock.png"
import fotoBlackAlien from "./src/assets/image/blackalien.png"
import fotoMetallica from "./src/assets/image/metallica.png"
import fotoQueen from "./src/assets/image/2Q.png"
import fotoOffspring from "./src/assets/image/Offspring.png"
import fotoPinkFloyd from "./src/assets/image/pinkfloyd.png"
import { Foundation } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';


export default function App2() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image source={fotoFil} style={styles.image} />
        <View style={[styles.headerItem, { backgroundColor: '#1ed65f' }]}>
          <Text style={[styles.text, { color: 'black' }]}>Tudo</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.text}>Música</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.text}>Podcast</Text>
        </View>
      </View>
      
      <View style={styles.playList}>
        <View style={styles.textPlayList}>
          <Image style={styles.imagePlayList} source={fotoOldRock} />
          <Text>Fil - Old Rock</Text>
        </View>
        <View>
          <View style={styles.textPlayList}>
            <Image style={styles.imagePlayList} source={fotoBlackAlien} />
            <Text>Fil - Black Alien</Text>
          </View>
        </View>
      </View>
     
      <View style={styles.text2}>
        <h1>Álbuns em alta para você</h1>
      </View>
     
      <View style={styles.image2Father}>
        <View>
          <Image style={styles.image2} source={fotoMetallica} />
          <Text style={styles.textStyle}>Metallica</Text>
          <Text style={styles.textStyle}>Album . 72 Seasons</Text>
        </View>
        <View>
          <Image style={styles.image2} source={fotoQueen} />
          <Text style={styles.textStyle}>Queen</Text>
          <Text style={styles.textStyle}>Album . The Miracle</Text>
        </View>
      </View>

      <View style={styles.text2}>
        <h1>Seus mixes mais ouvidos</h1>
      </View>
     
      <View style={styles.image2Father}>
        <View>
          <Image style={styles.image2} source={fotoOffspring} />
          <Text style={styles.textStyle}>The Offspring</Text>
          <Text style={styles.textStyle}>Album . Americana</Text>
        </View>
        <View>
          <Image style={styles.image2} source={fotoPinkFloyd} />
          <Text style={styles.textStyle}>Pink Floyd</Text>
          <Text style={styles.textStyle}>Album . The Dark Side...</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerChild}>
          <Foundation name='home' size={24} color='white' />
          <Text style={styles.footerText}>Inicio</Text>
        </View>
        <View style={styles.footerChild}>
          <EvilIcons name='search' size={24} color='white' />
          <Text style={styles.footerText}>Buscar</Text>
        </View>
        <View style={styles.footerChild}>
          <Ionicons name='library-outline' size={24} color='white' />
          <Text style={styles.footerText}>Sua Biblioteca</Text>
        </View>
      </View>

    </View>
  );
}

