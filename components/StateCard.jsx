import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const StateCard = () => {
	const [isPressed, setIsPressed] = useState(false);
	return (
		<View>
			<TouchableOpacity
				style={styles.card}
				onPress={() => {
					setIsPressed(!isPressed);
				}}
			>
				<Text>TEST</Text>
			</TouchableOpacity>
		</View>
	);
};
export default StateCard;
const styles = StyleSheet.create({
	card: {
		margin: 15,
		padding: 25,
		backgroundColor: "#000",
	},
});
