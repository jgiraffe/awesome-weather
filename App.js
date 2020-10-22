// import { StatusBar } from "expo-status-bar";
import React from "react";
import Alert from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "123";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: "Clear",
      temp: data.main.temp,
    });
  };
  getLocaion = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  };
  componentDidMount() {
    this.getLocaion();
  }
  render() {
    const { isLoading, condition, temp } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather condition={condition} temp={Math.rount(temp)} />
    );
  }
}
