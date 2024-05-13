import React from 'react';
import {Image, Text, View} from "react-native";

const cards = [
    {
    id: 'uioo',
    number: '4562 1334 7859 5748',
    type: 'MasterCard',
    balance: 92034
    },
    /*{
        id: 'ryuy',
        number: '4562 1334 7859 5748',
        type: 'Visa',
        balance: 78993
    },
    {
        id: 'werr',
        number: '4562 1334 7859 5748',
        type: 'Maestro',
        balance: 6765
    },*/
];

const Cards = () => {
    return (
        <View style={{marginVertical: 40}}>
            {cards.map(card => (
                <View key={card.id} style={{backgroundColor: '#50b055', borderRadius: 30, padding: 15}}>
                    <Image source={require('./images/chip.png')} style={{width: 40, height: 40}}></Image>
                    <Text style={{color: 'white', fontSize: 24}}>{card.number}</Text>
                    <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: 20}}>
                        <View>
                            <Text style={{color: 'white', textTransform: 'uppercase', fontSize: 10, marginBottom: 6}}>Card holder</Text>
                            <Text style={{color: 'white', fontSize: 16}}>Vlad</Text>
                        </View>
                        <View>
                            <Image source={require('./images/mastercard.png')}></Image>
                            <Text style={{color: 'white'}}>{card.type}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Cards;
