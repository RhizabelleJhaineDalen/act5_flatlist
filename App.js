import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { users } from './src/users';
import { FlatList } from 'react-native-web';
import Icon from 'react-native-vector-icons/Entypo'

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={styles.container1}>
            <View style={styles.firstletter}>
              <Text style={styles.capitallet}>{item.name.firstname.charAt(0).toUpperCase()}{item.name.lastname.charAt(0).toUpperCase()}</Text>
            </View>
            <View style={styles.guests}>
              <Text style={styles.name}>{item.name.lastname}, {item.name.firstname}{item.name.middlename ? `, ${item.name.middlename}.` : ''}</Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>    
              <Icon style={styles.dots} name="dots-three-horizontal" size={25} />
          </View>
        )}
        keyExtractor={(user) => user.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 220,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  name: {
    flexDirection: 'row',
    fontFamily: 'Tahoma',
    fontSize: 15,
    fontWeight: 'bold',
    width: 340,
    marginTop: '13px',
    left: 75,
  },
  address: {
    fontFamily: 'Tahoma',
    fontSize: 13,
    left: 75,
  },
  firstletter: {
    left: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#329AD4',
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
  },
  capitallet: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  dots: {
    right: 10,
  }

});
