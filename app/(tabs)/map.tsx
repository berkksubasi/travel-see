import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {ScreenContainer} from '@components/containers';
import {YStack} from '@ui/primitives';

function MapScreen() {
    const [campgrounds, setCampgrounds] = useState([]);

    const fetchCampgrounds = async () => {
        try {
            const response = await fetch(
                'https://overpass-api.de/api/interpreter?data=[out:json];(node["tourism"="caravan_site"];way["tourism"="caravan_site"];relation["tourism"="caravan_site"];);out;',
            );
            const data = await response.json();
            console.log('API Response:', data);
            if (data.elements && data.elements.length > 0) {
                const campgroundsData = data.elements.map(
                    (element: any) => ({
                        id: element.id,
                        title: element.tags.name || 'Unknown',
                        latitude: element.lat,
                        longitude: element.lon,
                    }),
                );
                setCampgrounds(campgroundsData);
            } else {
                console.error('No campgrounds data found.');
            }
        } catch (error) {
            console.error('Error fetching campgrounds:', error);
        }
    };

    useEffect(() => {
        fetchCampgrounds();
    }, []);

    return (
        <ScreenContainer
            headerPadding
            horizontalPadding={0}
        >
            <YStack
                w="100%"
                h="100%"
            >
                <View style={{flex: 1}}>
                    <MapView
                        style={{flex: 1}}
                        initialRegion={{
                            latitude: 41.0082,
                            longitude: 28.9784,
                            latitudeDelta: 10,
                            longitudeDelta: 10,
                        }}
                    >
                        {/* Kamp alanı işaretçileri */}
                        {campgrounds.map((campground) => (
                            <Marker
                                key={campground.id}
                                coordinate={{
                                    latitude: campground.latitude,
                                    longitude: campground.longitude,
                                }}
                                title={campground.title}
                            />
                        ))}
                    </MapView>
                </View>
            </YStack>
        </ScreenContainer>
    );
}

export default MapScreen;
