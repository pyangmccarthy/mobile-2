import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput
} from 'react-native';
import { Shadow } from "react-native-shadow-2";
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
 } from "react-native-reanimated";

import { Textbutton, CategoryCard } from "../components";
import { COLORS, FONTS, SIZES, icons, dummyData } from '../constants';


const Search = () => {
    const scrollViewRef = React.useRef()
    function renderTopSearches() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >
                    Top Searches
                </Text>

            </View>
        )
    }
    
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <Animated.ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{
                    marginTop: 100,
                    paddingBottom: 300
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                keyboardDismissMode="on-drag"
            >
                {renderTopSearches()}

            </Animated.ScrollView>
        </View>
    )
}

export default Search;