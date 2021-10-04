import React from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
} from "react-native";

const ShowUser = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>ShowUser</Text>
            </View>
        </SafeAreaView>
    );
};

export default ShowUser;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    },
});
