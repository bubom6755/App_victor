import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const cards = [
    { title: 'Crop top rose', image: require('./img/pf1.jpeg'), price: '$39.99', description: 'Plongez dans la féminité avec lÉclat Rose, un crop top tendance qui évoque la douceur et lélégance. Fabriqué à partir dun tissu léger et extensible, ce crop top rose saura mettre en valeur votre silhouette avec style. Parfait pour les journées ensoleillées ou pour ajouter une touche vibrante à vos tenues estivales. La subtile teinte rose et la coupe moderne font de lÉclat Rose un incontournable pour celles qui recherchent un look à la fois chic et décontracté.' },
    { title: 'Sweat laine rose', image: require('./img/pf2.jpeg'), price: '$49.99', description: 'Découvrez le confort délicat de notre sweat en laine rose, baptisé Rosée Douce. Conçu pour vous offrir une chaleur douillette pendant les journées fraîches, ce sweat incarne lélégance et la simplicité. Sa teinte rose subtile ajoute une touche de féminité sans effort, tandis que la douceur de la laine crée une expérience sensorielle agréable. Parfait pour rester au chaud avec style, le Rosée Douce est le compagnon idéal pour les journées décontractées ou les soirées confortables à la maison.' },
    { title: 'Pull veloure violet', image: require('./img/pf3.jpeg'), price: '$29.99', description: 'Embrassez la chaleur luxueuse du Velours Pourpre, notre pull en laine violet qui allie confort et élégance. Fabriqué à partir dune laine de qualité, ce pull offre une sensation veloutée contre la peau tout en apportant une touche de sophistication avec sa teinte pourpre profonde. Parfait pour affronter les journées fraîches avec style, le Velours Pourpre est un incontournable de la garde-robe hivernale. Associez la richesse de la couleur violette à la chaleur de la laine pour une expérience vestimentaire aussi confortable que raffinée.' },
    { title: 'Blazer en Laine', image: require('./img/pf4.jpeg'), price: '$59.99', description: 'Un blazer sophistiqué en laine mélangée qui incarne lélégance urbaine. Parfait pour une tenue professionnelle ou pour ajouter une touche chic à votre look décontracté.' },
    { title: 'T-shirt beige', image: require('./img/pf5.jpeg'), price: '$34.99', description: 'Le Sable Doux incarne la simplicité raffinée avec ce t-shirt beige qui fusionne confort et élégance. Confectionné dans un tissu léger et doux, ce t-shirt offre une sensation agréable contre la peau, idéal pour les journées décontractées. Sa teinte beige neutre crée une toile parfaite pour une variété de styles, du décontracté au chic. Polyvalent et intemporel, le Sable Doux deviendra rapidement une pièce essentielle de votre garde-robe, ajoutant une touche subtile délégance à chaque tenue.' },
    { title: 'Haut en laine', image: require('./img/pf6.jpeg'), price: '$44.99', description: 'Plongez dans une expérience de chaleur et de confort avec le Haut en Laine Naturelle, baptisé Chaleur Écru. Fabriqué à partir dune laine de qualité supérieure, ce haut offre une douceur enveloppante tout en maintenant une allure chic. La teinte écru naturelle ajoute une touche de simplicité et de sophistication, permettant à ce haut en laine de se fondre harmonieusement dans nimporte quelle tenue. Que ce soit pour une journée décontractée ou une soirée plus habillée, le Chaleur Écru offre le mariage parfait entre le confort douillet de la laine et légance épurée.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SouthHood Boutique</Text>
      <View style={styles.grid}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('ProductDetails', { title: card.title, image: card.image, price: card.price, description: card.description })}
          >
            <View style={styles.card}>
              <Image source={card.image} style={styles.image} />
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardPrice}>{card.price}</Text>
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => navigation.navigate('ProductDetails', { title: card.title, image: card.image, price: card.price, description: card.description })}
              >
                <Text style={styles.buttonText}>Acheter</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'orange',
    color: 'white',
    paddingTop: '7%',
    paddingBottom: '7%',
    paddingLeft: '25%',
    paddingRight: '25%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#FFA500',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
