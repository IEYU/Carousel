import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CardDeck from "./components/CardDeck";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
	const [states, setStates] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3000/states").then((response) => {
			setStates(response.data);
		});
	});
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Text style={styles.title}>Saving Carousel Test</Text>
				<CardDeck states={states} />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "rgb(242,242,239)",
		paddingHorizontal: 20,
	},
	wrapper: {
		paddingTop: 80,
		marginBottom: 20,
		flex: 1,
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
	},
});
