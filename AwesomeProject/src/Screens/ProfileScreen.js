import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from '../Styles/ProfileStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
const Profile = ({navigation}) => {
  const [userName, setuserName] = useState('');
  const [userDes, setuserDes] = useState('');
<<<<<<< HEAD
  const [photourl, setPhotoUrl] = useState('');
  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const data = JSON.parse(userData);
        console.log('after logout', data);
        setuserName(data.userName);
        setuserDes(data.userDes);
<<<<<<< HEAD
        setPhotoUrl(data.photoUrl);
      } else {
        console.log('User data not found in AsyncStorage.');
      }
    } catch (error) {
      console.log('Error while retrieving user data:', error);
    }
  };
  const count = 1;
  useEffect(() => {
    getUserData();
  }, [count]);

  return (
    <ScrollView>
      <View style={styles.Addfullscreen}>
        <View style={styles.leftIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.accountBack}>
              <Icon name="chevron-back" size={30} color="white" />
            </View>
          </TouchableOpacity>
          <View style={styles.titleText}>
            <Text style={styles.AddtitleText}>My Account</Text>
          </View>
        </View>

        <View style={styles.profileDetails}>
          <View style={styles.profileImage}>
            <Avatar.Image
              size={70}
              source={{uri: photourl}}
=======
              source={{uri: photuurl}}
>>>>>>> 77fd565 ( changes in theme)
              avatarStyle={{
                borderWidth: 22,
                borderColor: 'white',
                borderTopLeftRadius: 1,
                borderStyle: 'solid',
              }}
            />
          </View>

          <View>
            <Text style={styles.ProfileTitle}>{userName}</Text>
            <Text style={styles.ProfileSubtitle}>{userDes}</Text>
          </View>
        </View>
        <View style={styles.editFlex}>
          <View style={styles.container}>
            <View style={{marginBottom: 40}}>
              <Text style={styles.editTitle}>Display Name</Text>
              <View style={styles.editValBtn}>
                <Text style={styles.editValue}>{userName}</Text>

                <Button
                  icon="account-edit"
                  mode="contained"
                  style={styles.editBtn}>
                  Edit
                </Button>
              </View>
            </View>

            <View style={{marginBottom: 40}}>
              <Text style={styles.editTitle}>Email</Text>
              <View style={styles.editValBtn}>
                <Text style={styles.editValue}>{email}</Text>
                <Button
                  icon="account-edit"
                  mode="contained"
                  style={styles.editBtn}>
                  Edit
                </Button>
              </View>
            </View>

            <View style={{marginBottom: 40}}>
              <Text style={styles.editTitle}>Password</Text>
              <View style={styles.editValBtn}>
                <Text style={styles.editValue}>{email}</Text>
                <Button style={styles.editBtn}>Change</Button>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.editFlex}>
            <Text style={styles.signOutBtn}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

