import React, { useState } from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const primary = "#1490A6",
    secondary = "#717171",
    border = "#C0C0C0";

const SelectFilter = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
            <TouchableOpacity
                activeOpacity={0.5}
                style={{
                    height: 30,
                    borderColor: primary,
                    borderWidth: 1,
                    borderRadius: 2,
                    width: "85%",
                }}
            ></TouchableOpacity>
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
    const CheckboxPicker = ({ title }) => (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={{ color: secondary }}>{title}</Text>
        </View>
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
                        borderRadius: 2,
                    }}
                >
                    <View style={{ padding: 15 }}>
                        <Text style={styles.boldText}>Date</Text>
                        <Border />
                        <TextInputField title="From" />
                        <TextInputField title="To" />
                        <Text style={[styles.boldText, { paddingTop: 10 }]}>
                            Status
                        </Text>
                        <Border />
                        <CheckboxPicker title="Active" />
                        <CheckboxPicker title="Super Active" />
                        <CheckboxPicker title="Bored" />

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={{
                                backgroundColor: primary,
                                alignItems: "center",
                                justifyContent: "center",
                                height: 40,
                                width: 90,
                                borderRadius: 5,
                                alignSelf: "center",
                                marginTop: 20,
                            }}
                        >
                            <Text style={{ color: "white", fontSize: 16 }}>
                                Generate
                            </Text>
                        </TouchableOpacity>
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
