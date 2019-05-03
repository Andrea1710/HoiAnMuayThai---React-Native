import { Permissions, Notifications } from "expo";
import { AsyncStorage } from "react-native";

export default async () => {
  try {
    let previousToken = await AsyncStorage.getItem("pushtoken");

    if (previousToken) {
      return;
    } else {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      console.log(status);

      if (status !== "granted") {
        alert("You need to enable permissions and settings");
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      console.log("status:", status, "token:", token);
    }
  } catch (err) {
    console.log(err);
  }
};
