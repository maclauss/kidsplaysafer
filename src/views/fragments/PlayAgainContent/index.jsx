import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../../hooks/useScreenSize";
import {
  Share as ShareComponent,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import ROUTE_NAMES from "../../../constants/routeNames";

import {
  PlayAgainContentWrapper,
  PlayAgainHeader,
  StartButton,
  Share,
} from "./styled.components";

const { START } = ROUTE_NAMES;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 120,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 15,
    border: "none",
    backgroundColor: "#00ffff",
  },
  text: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "Open Sans",
  },
});

const PlayAgainContent = () => {
  const navigate = useNavigate();
  const { isSmallScreen } = useScreenSize();

  const onStartClick = () => {
    navigate(START);
  };

  const onShare = async () => {
    try {
      let text = "Visit this website to play the KidsPlaySafer game!";
      await ShareComponent.share(
        {
          subject: text,
          title: text,
          message: text,
          // url: "https://kidsplaysafer.com"
        },
        {
          dialogTitle: "Share KidsPlaySafer",
          excludedActivityTypes: [],
        }
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <PlayAgainContentWrapper isSmallScreen={isSmallScreen}>
      <PlayAgainHeader>Play Again?</PlayAgainHeader>
      <StartButton onClick={onStartClick}>Start</StartButton>
      <Share>Share this game with your friends!</Share>
      <Pressable style={styles.button} onPress={onShare}>
        <Text style={styles.text}>Share</Text>
      </Pressable>
    </PlayAgainContentWrapper>
  );
};

export default PlayAgainContent;
