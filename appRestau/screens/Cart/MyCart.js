import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { withTheme, useTheme, ButtonGroup, Text, Card, Button, Icon } from 'react-native-elements';
import { icons, images, SIZES, SIZE, COLORS, FONT, FONTS } from '../../constants';

const users = [
    {
      name: 'Hamburguesa doble, con lechuga',
      avatar: 'burger-restaurant-2.jpg', 
    },
    {
      name: 'thot leader',
      avatar:
        'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
    {
      name: 'jsa',
      avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    },
  ];

const MyCart = () => {
  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.nearby}
            resizeSMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONT.h3 }}>Location</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return(
    <View style={styles.container}>
    {renderHeader()}
        <ScrollView>
            <View>
                <Card>
                    <Card.Title>HAMBURGUESA</Card.Title>
                    {users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            
                        />
                        <Text style={styles.name}>{u.name}</Text>
                        </View>
                    );
                    })}
                </Card>
                <Card>
                    <Card.Title>ALISTAS DE POLLO</Card.Title>
                    {users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                        />
                        <Text style={styles.name}>{u.name}</Text>
                        </View>
                    );
                    })}
                </Card>
                <Card>
                    <Card.Title>CARNE ASADA</Card.Title>
                    {users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                        />
                        <Text style={styles.name}>{u.name}</Text>
                        </View>
                    );
                    })}
                </Card>
                <Card>
                    <Card.Title>ALISTAS DE POLLO</Card.Title>
                    {users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                        />
                        <Text style={styles.name}>{u.name}</Text>
                        </View>
                    );
                    })}
                </Card>
                <Card>
                    <Card.Title>ALISTAS DE POLLO</Card.Title>
                    {users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                        />
                        <Text style={styles.name}>{u.name}</Text>
                        </View>
                    );
                    })}
                </Card>
                <Card>
                    <Card.Title>ALISTAS DE POLLO</Card.Title>
                    {users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                        />
                        <Text style={styles.name}>{u.name}</Text>
                        </View>
                    );
                    })}
                </Card>
                <Card>
                    <Card.Title>ALISTAS DE POLLO</Card.Title>
                    {users.map((u, i) => {
                    return (
                        <View key={i} style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                        />
                        <Text style={styles.name}>{u.name}</Text>
                        </View>
                    );
                    })}
                </Card>
                <View style={styles.buttonsContainer}>
                    <Button
                        title="Procesar mi orden"
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                        backgroundColor: 'rgba(57, 146, 146, 1)',

                        borderRadius: 5,
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                        containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 200,
                        marginVertical: 10,
                        }}
                        onPress={() => console.log('aye')}
                    />
                </View>
            </View>
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  view: {
    margin: 10,
  },
  text: {
    textAlign: "center",
    padding: 5,
  },
  more: {
    marginVertical: 20,
  },
  button: {
    width: 120,
    marginLeft: "auto",
    marginRight: "auto",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },

  largeTitle: { fontSize: SIZE.largeTitle, lineHeight: 55 },
  h1: { fontSize: SIZE.h1, lineHeight: 36 },
  h2: { fontSize: SIZE.h2, lineHeight: 30 },
  h3: { fontSize: SIZE.h3, lineHeight: 22 },
  h4: { fontSize: SIZE.h4, lineHeight: 22 },
  body1: { fontSize: SIZE.body1, lineHeight: 36 },
  body2: { fontSize: SIZE.body2, lineHeight: 30 },
  body3: { fontSize: SIZE.body3, lineHeight: 22 },
  body4: { fontSize: SIZE.body4, lineHeight: 22 },
  body5: { fontSize: SIZE.body5, lineHeight: 22 },
});

export default MyCart