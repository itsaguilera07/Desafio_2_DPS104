import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function DishCard({ dish, onPress, width }) {
  return (
    <Pressable onPress={onPress} style={[styles.card, { width }]}>
      <Image source={{ uri: dish.photo }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{dish.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>{dish.description}</Text>
        <View style={styles.row}>
          <Text style={styles.chip}>{dish.category}</Text>
          <Text style={styles.price}>${dish.price.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  body: {
    padding: 12,
    gap: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  desc: {
    fontSize: 14,
    color: '#4b5563',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  chip: {
    fontSize: 12,
    backgroundColor: '#e0e7ff', // azul claro
    color: '#4f46e5',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    fontWeight: '600',
  },
  price: {
    fontWeight: '700',
    color: '#111827',
  },
});
