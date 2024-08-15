import { FlatList, StyleSheet, Text, View } from "react-native";
import StateCard from "./StateCard";
import AntDesign from "@expo/vector-icons/AntDesign";

const handleLeft = () => {};

const CardDeck = ({ states }) => {
	// const states = ["PA", "NY", "WA", "MN", "TX"];
	return (
		<View styles={styles.container}>
			<FlatList
				horizontal={true}
				data={states}
				renderItem={({ item }) => <StateCard state={item} />}
				contentContainerStyle={styles.listContentStyle}
			/>
			<View style={styles.navigationContainer}>
				<AntDesign
					name="left"
					size={24}
					color="black"
					style={styles.arrow}
				/>
				<AntDesign
					name="right"
					size={24}
					color="black"
					style={styles.arrow}
				/>
			</View>
		</View>
	);
};
export default CardDeck;
const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	listContentStyle: {
		paddingVertical: 10,
	},
	navigationContainer: {
		// backgroundColor: "black",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 20,
		marginBottom: 20,
	},
	arrowLeft: {
		marginLeft: 40,
	},
	arrowRight: {
		marginRight: 20,
	},
});
