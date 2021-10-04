import React from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
} from "react-native";

const EditFilter = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>EditFilter</Text>
            </View>
        </SafeAreaView>
    );
};

export default EditFilter;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    },
});
