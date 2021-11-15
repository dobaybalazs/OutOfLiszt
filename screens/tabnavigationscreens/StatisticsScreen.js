import React from "react";
import { StyleSheet, View } from "react-native";
import SVG, { G, Circle, Text } from "react-native-svg";
import Colors from "../../constants/Colors";

import DefaultText from "../../components/texts/DefaultText";

const StatisticsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <DefaultText style={{ fontSize: 24 }}>Statisztika</DefaultText>
      </View>
      <View style={styles.chart}>
        <SVG width={250} height={250} viewBox={`0 0 100 100`}>
          <G>
            <Circle
              cx="50%"
              cy="50%"
              stroke={Colors.redcolor}
              strokeWidth={6}
              r={40}
              strokeOpacity={1.0}
            />

            <Circle
              cx="50%"
              cy="50%"
              stroke="yellow"
              strokeWidth={6}
              r={40}
              strokeOpacity={1.0}
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={(2 * Math.PI * 40) / 3}
              strokeLinecap="square"
            />
            <Circle
              cx="50%"
              cy="50%"
              stroke={Colors.bluecolor}
              strokeWidth={6}
              r={40}
              strokeOpacity={1.0}
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={(2 * Math.PI * 40) / 2}
              strokeLinecap="square"
            />
            <Circle
              cx="50%"
              cy="50%"
              stroke={Colors.greencolor}
              strokeWidth={6}
              r={40}
              strokeOpacity={1.0}
              strokeDasharray={2 * Math.PI * 40}
              strokeDashoffset={(3 * Math.PI * 40) / 2}
              strokeLinecap="square"
            />
            <Text
              x="38%"
              y="45%"
              text-anchor="middle"
              stroke="none"
              dy=".1em"
              fontSize={14}
              alignment-baseline="middle"
              fill={Colors.secondarygray}
            >
              150
            </Text>
            <Text
              x="28%"
              y="55%"
              text-anchor="middle"
              stroke="none"
              fill={Colors.secondarygray}
              stroke-width="2px"
              dy=".1em"
              fontSize={8}
              alignment-baseline="middle"
            >
              Megvásárolt
            </Text>
            <Text
              x="38%"
              y="65%"
              text-anchor="middle"
              stroke="none"
              fill={Colors.secondarygray}
              stroke-width="2px"
              dy=".1em"
              fontSize={8}
              alignment-baseline="middle"
            >
              termék
            </Text>
          </G>
        </SVG>
      </View>
      <View style={styles.body}>
        <View style={styles.categoryContainer}>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10000,
              backgroundColor: "red",
            }}
          ></View>
          <View style={styles.category}>
            <DefaultText style={styles.text}>Hús</DefaultText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 80,
              }}
            >
              <DefaultText style={styles.text}>84</DefaultText>
              <DefaultText style={styles.text}>42%</DefaultText>
            </View>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10000,
              backgroundColor: "green",
            }}
          ></View>
          <View style={styles.category}>
            <DefaultText style={styles.text}>Tejtermék</DefaultText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 80,
              }}
            >
              <DefaultText style={styles.text}>32</DefaultText>
              <DefaultText style={styles.text}>16%</DefaultText>
            </View>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10000,
              backgroundColor: "yellow",
            }}
          ></View>
          <View style={styles.category}>
            <DefaultText style={styles.text}>Gyümölcs</DefaultText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 80,
              }}
            >
              <DefaultText style={styles.text}>54</DefaultText>
              <DefaultText style={styles.text}>27%</DefaultText>
            </View>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 10000,
              backgroundColor: Colors.bluecolor,
            }}
          ></View>
          <View style={styles.category}>
            <DefaultText style={styles.text}>Zöldség</DefaultText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 80,
              }}
            >
              <DefaultText style={styles.text}>30</DefaultText>
              <DefaultText style={styles.text}>15%</DefaultText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  body: {
    height: 250,
    width: "100%",
    alignItems: "center",
  },
  categoryContainer: {
    width: "80%",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  category: {
    paddingVertical: 5,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },
  text: {
    fontSize: 18,
    color: Colors.secondarygray,
  },
});

export default StatisticsScreen;
