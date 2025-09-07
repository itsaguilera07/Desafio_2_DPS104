import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import dishes from './data/dishes';

export default function DishDetails() {
  const { id } = useLocalSearchParams();
  const dish = dishes.find((d) => d.id.toString() === id);

  if (!dish) {
    return <Text>Platillo no encontrado</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: dish.photo }} style={styles.image} />
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>Precio: ${dish.price}</Text>
      <Text style={styles.region}>Región: {dish.region}</Text>
      <Text style={styles.category}>Categoría: {dish.category}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      {dish.ingredients.map((ing, idx) => (
        <Text key={idx}>• {ing}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginVertical: 8 },
  description: { marginBottom: 10 },
  price: { fontWeight: 'bold' },
  region: { fontStyle: 'italic' },
  category: { marginBottom: 10 },
  subtitle: { marginTop: 10, fontWeight: 'bold' },
});
