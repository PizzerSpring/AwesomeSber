import React from 'react';
import {Image, Linking, Text, TouchableHighlight, View} from "react-native";

const Header = () => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <View>
                <Text style={{fontSize: 24,fontWeight: '700', color: 'white', marginBottom: 6}}>Hi User</Text>
                <Text style={{color: '#8d9699'}}>Welcome back</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => Linking.openURL('')}>
                    <Image source={{uri: ''}} style={{width: 51, height: 45}}/>
                </TouchableHighlight>
            </View>
            <View>
                <Image source={{uri: 'https://cdn2.iconfinder.com/data/icons/user-23/512/User_Generic_1.png'}} style={{
                    width: 45,
                    height: 45,
                   }}/>
            </View>
        </View>
    );
};

export default Header;
