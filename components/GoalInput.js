import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    // console.log(enteredTex);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <>
      <StatusBar style="auto" />
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goalimg.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal !"
            onChangeText={goalInputHandler}
            value={enteredGoalText} //back to emtpy field once user entered
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={addGoalHandler}
                title="Add Goal"
                color={"#0aa814"}
              />
            </View>
            <View style={[styles.button, styles.btnCancel]}>
              <Button
                onPress={props.onCancel}
                title="Cancel"
                color={"#db1313"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    // marginRight: 8,
    padding: 14,
    backgroundColor: "#fcbdb2",
    borderColor: "#f88b78",
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
