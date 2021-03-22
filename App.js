import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.search}>
					<Text>Searching</Text>
				</View>
				<View style={styles.list}>
					<Text>List</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style='auto' />
		</>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, paddingTop: StatusBar.currentHeight },
	search: { backgroundColor: "green", padding: 10 },
	list: {
		flex: 1,
		backgroundColor: "blue",
		padding: 10,
	},
});
