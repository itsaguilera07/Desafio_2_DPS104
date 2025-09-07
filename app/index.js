import { FlatList, SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useRouter } from 'expo-router';
import DishCard from './components/DishCard';
import dishes from './data/dishes';

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isLandscape = width > 600;
  const cardWidth = isLandscape ? (width / 2) - 30 : width - 20;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Platillos Tipicos</Text>
      </View>

      {/* LISTA DE PLATILLOS */}
      <FlatList
        data={dishes}
        key={isLandscape ? 'h' : 'v'}
        numColumns={isLandscape ? 2 : 1}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <DishCard
            dish={item}
            width={cardWidth}
            onPress={() => router.push(`/${item.id}`)}
          />
        )}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Universidad Don Bosco - AM232693</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    height: 60,
    backgroundColor: '#4f46e5', // azul moderno
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    height: 50,
    backgroundColor: '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});
