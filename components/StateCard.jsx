import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const StateCard = ({ state }) => {
	const [isPressed, setIsPressed] = useState(false);
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					setIsPressed(!isPressed);
				}}
				style={[styles.card, isPressed && styles.cardPressed]}
			>
				<Text>{state.name}</Text>
			</TouchableOpacity>
		</View>
	);
};
export default StateCard;
const styles = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		padding: 25,
		borderRadius: 10,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.15,
		shadowRadius: 5,
		margin: 10,
	},
	cardPressed: {
		backgroundColor: "rgb(232,232, 230)",
	},
});
