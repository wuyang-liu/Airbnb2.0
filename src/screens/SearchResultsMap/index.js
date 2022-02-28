import React, {useEffect, useRef} from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = props => {
  const [selectedPlaceId, setSelectedPlaceId] = React.useState(null);

  const flatList = useRef();
  const mapRef = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setSelectedPlaceId(viewableItems[0].item.id);
    }
  });

  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({index});

    const {latitude, longitude} = places[index].coordinate;

    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    mapRef.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={mapRef}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatList}
          data={places}
          renderItem={({item}) => (
            <PostCarouselItem key={item.id} post={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
