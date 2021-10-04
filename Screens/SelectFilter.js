import React from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
} from "react-native";
const primary = "#1490A6",
    secondary = "#717171",
    border = "#C0C0C0";

const SelectFilter = () => {
    const HeaderTop = () => (
        <View style={{ height: 60, backgroundColor: primary }}></View>
    );
    const Title = () => (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.boldText}>User Analyzer</Text>
            <Text
                style={{
                    color: secondary,
                    paddingTop: 7,
                }}
            >
                Select filters to generate report
            </Text>
        </View>
    );
    const TextInputField = ({ title }) => (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 10,
            }}
        >
            <Text style={{ color: primary, paddingRight: 5 }}>{title}</Text>
            <View
                style={{
                    height: 30,
                    borderColor: primary,
                    borderWidth: 1,
                    // flex: 1,
                    width: "85%",
                }}
            ></View>
        </View>
    );

    const Border = () => (
        <View
            style={{
                borderBottomWidth: 1,
                borderColor: border,
                marginVertical: 10,
            }}
        ></View>
    );

    return (
        <SafeAreaView>
            <View style={styles.container}></View>
            <HeaderTop />
            <View style={{ paddingTop: 20 }}>
                <Title />
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: primary,
                        marginTop: 30,
                        marginHorizontal: 20,
                    }}
                >
                    <View style={{ padding: 15 }}>
                        <Text style={styles.boldText}>Date</Text>
                        <Border />
                        <TextInputField title="From" />
                        <TextInputField title="To" />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SelectFilter;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    },
    boldText: {
        color: "#0A5A62",
        fontSize: 17,
        fontWeight: "700",
    },
});
