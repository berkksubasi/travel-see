import React from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Text, YStack} from '@ui/primitives';

const MapScreen = () => {
    // CampingArea
    const campgrounds = [
        {
            id: 1,
            title: 'İstanbul',
            description: 'Bu bir kamp alanıdır.',
            latitude: 41.0082,
            longitude: 28.9784,
        },
        {
            id: 2,
            title: 'Berlin',
            description: 'Bu bir kamp alanıdır.',
            latitude: 52.52,
            longitude: 13.405,
        },
    ];

    return (
        <YStack
            flex={1}
            w={'100%'}
            h={'100%'}
        >
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                        latitude: 41.0082, // Default Value ( ISTANBUL )
                        longitude: 28.9784,
                        latitudeDelta: 1, // Zoom Default Value
                        longitudeDelta: 1,
                    }}
                >
                    <YStack
                        w={'100%'}
                        h={'100%'}
                    >
                        <Text>dskfhjskjfhsldkfjhljhkdsjhjk</Text>
                    </YStack>
                    {/* Camping Area Marker */}
                    {campgrounds.map((campground) => (
                        <Marker
                            key={campground.id}
                            coordinate={{
                                latitude: campground.latitude,
                                longitude: campground.longitude,
                            }}
                            title={campground.title}
                            description={campground.description}
                        />
                    ))}
                </MapView>
            </View>
        </YStack>
    );
};

export default MapScreen;
