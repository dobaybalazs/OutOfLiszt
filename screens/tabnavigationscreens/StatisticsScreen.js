import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SVG, { G, Circle, Text } from "react-native-svg";
import Colors from "../../constants/Colors";

import DefaultText from "../../components/texts/DefaultText";
import { LISTITEMS } from "../../data/dummy-data";
import { filters } from "../../components/ItemFilter";

const StatisticsScreen = (props) => {
  const radius = 100;
  const strokewidth = 12;
  const halfcircle = radius + strokewidth;
  const circleCircumference = 2 * Math.PI * radius;
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <DefaultText style={{ fontSize: 24 }}>Statisztika</DefaultText>
      </View>
      <View style={styles.chart}>
        <SVG
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${halfcircle * 2} ${halfcircle * 2}`}
        >
          <G>
            <G rotation="-90" origin={`${halfcircle}, ${halfcircle}`}>
              <Circle
                cx="50%"
                cy="50%"
                stroke={Colors.redcolor}
                strokeWidth={strokewidth}
                r={radius}
                strokeOpacity={1.0}
              />
              <Circle
                cx="50%"
                cy="50%"
                stroke="blue"
                strokeWidth={strokewidth}
                r={radius}
                strokeOpacity={1.0}
                strokeDasharray={circleCircumference}
                strokeDashoffset={
                  circleCircumference -
                  (circleCircumference *
                    (LISTITEMS.filter((item) => {
                      return filters[1].name === item.categoryId;
                    }).length +
                      LISTITEMS.filter((item) => {
                        return filters[2].name === item.categoryId;
                      }).length +
                      LISTITEMS.filter((item) => {
                        return filters[3].name === item.categoryId;
                      }).length +
                      LISTITEMS.filter((item) => {
                        return filters[4].name === item.categoryId;
                      }).length +
                      LISTITEMS.filter((item) => {
                        return filters[5].name === item.categoryId;
                      }).length)) /
                    LISTITEMS.length
                }
              />
              <Circle
                cx="50%"
                cy="50%"
                stroke="orange"
                strokeWidth={strokewidth}
                r={radius}
                strokeOpacity={1.0}
                strokeDasharray={circleCircumference}
                strokeDashoffset={
                  circleCircumference -
                  (circleCircumference *
                    (LISTITEMS.filter((item) => {
                      return filters[1].name === item.categoryId;
                    }).length +
                      LISTITEMS.filter((item) => {
                        return filters[2].name === item.categoryId;
                      }).length +
                      LISTITEMS.filter((item) => {
                        return filters[3].name === item.categoryId;
                      }).length +
                      LISTITEMS.filter((item) => {
                        return filters[4].name === item.categoryId;
                      }).length)) /
                    LISTITEMS.length
                }
              />
              <Circle
                cx="50%"
                cy="50%"
                stroke="yellow"
                strokeWidth={strokewidth}
                r={radius}
                strokeOpacity={1.0}
                strokeDasharray={circleCircumference}
                strokeDashoffset={
                  circleCircumference -
                  (circleCircumference *
                    (LISTITEMS.filter((item) => {
                      return filters[1].name === item.categoryId;
                    }).length +
                      LISTITEMS.filter((item) => {
                        return filters[2].name === item.categoryId;
                      }).length +
                      LISTITEMS.filter((item) => {
                        return filters[3].name === item.categoryId;
                      }).length)) /
                    LISTITEMS.length
                }
              />
              <Circle
                cx="50%"
                cy="50%"
                stroke={Colors.greencolor}
                strokeWidth={strokewidth}
                r={radius}
                strokeOpacity={1.0}
                strokeDasharray={circleCircumference}
                strokeDashoffset={
                  circleCircumference -
                  (circleCircumference *
                    (LISTITEMS.filter((item) => {
                      return filters[1].name === item.categoryId;
                    }).length +
                      LISTITEMS.filter((item) => {
                        return filters[2].name === item.categoryId;
                      }).length)) /
                    LISTITEMS.length
                }
              />
              <Circle
                cx="50%"
                cy="50%"
                stroke={Colors.bluecolor}
                strokeWidth={strokewidth}
                r={radius}
                strokeOpacity={1.0}
                strokeDasharray={circleCircumference}
                strokeDashoffset={
                  circleCircumference -
                  (circleCircumference *
                    LISTITEMS.filter((item) => {
                      return filters[1].name === item.categoryId;
                    }).length) /
                    LISTITEMS.length
                }
              />
            </G>
            <Text
              x="40%"
              y="50%"
              text-anchor="middle"
              stroke="none"
              dy=".1em"
              fontSize={35}
              alignment-baseline="middle"
              fill={Colors.secondarygray}
            >
              {LISTITEMS.length}
            </Text>
            <Text
              x="20%"
              y="62%"
              text-anchor="middle"
              stroke="none"
              fill={Colors.secondarygray}
              stroke-width="2px"
              dy=".1em"
              fontSize={23}
              alignment-baseline="middle"
            >
              Megvásárolt
            </Text>
            <Text
              x="32%"
              y="74%"
              text-anchor="middle"
              stroke="none"
              fill={Colors.secondarygray}
              stroke-width="2px"
              dy=".1em"
              fontSize={23}
              alignment-baseline="middle"
            >
              termék
            </Text>
          </G>
        </SVG>
      </View>
      <View style={styles.body}>
        <ScrollView
          contentContainerStyle={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
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
                <DefaultText style={styles.text}>
                  {
                    LISTITEMS.filter((item) => {
                      return filters[0].name === item.categoryId;
                    }).length
                  }
                </DefaultText>
                <DefaultText style={styles.text}>
                  {Math.round(
                    (LISTITEMS.filter((item) => {
                      return filters[0].name === item.categoryId;
                    }).length /
                      LISTITEMS.length) *
                      100
                  )}
                  %
                </DefaultText>
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
                <DefaultText style={styles.text}>
                  {
                    LISTITEMS.filter((item) => {
                      return filters[3].name === item.categoryId;
                    }).length
                  }
                </DefaultText>
                <DefaultText style={styles.text}>
                  {Math.round(
                    (LISTITEMS.filter((item) => {
                      return filters[3].name === item.categoryId;
                    }).length /
                      LISTITEMS.length) *
                      100
                  )}
                  %
                </DefaultText>
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
                <DefaultText style={styles.text}>
                  {
                    LISTITEMS.filter((item) => {
                      return filters[2].name === item.categoryId;
                    }).length
                  }
                </DefaultText>
                <DefaultText style={styles.text}>
                  {Math.round(
                    (LISTITEMS.filter((item) => {
                      return filters[2].name === item.categoryId;
                    }).length /
                      LISTITEMS.length) *
                      100
                  )}
                  %
                </DefaultText>
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
                <DefaultText style={styles.text}>
                  {
                    LISTITEMS.filter((item) => {
                      return filters[1].name === item.categoryId;
                    }).length
                  }
                </DefaultText>
                <DefaultText style={styles.text}>
                  {Math.round(
                    (LISTITEMS.filter((item) => {
                      return filters[1].name === item.categoryId;
                    }).length /
                      LISTITEMS.length) *
                      100
                  )}
                  %
                </DefaultText>
              </View>
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 10000,
                backgroundColor: "orange",
              }}
            ></View>
            <View style={styles.category}>
              <DefaultText style={styles.text}>Édességek</DefaultText>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 80,
                }}
              >
                <DefaultText style={styles.text}>
                  {
                    LISTITEMS.filter((item) => {
                      return filters[4].name === item.categoryId;
                    }).length
                  }
                </DefaultText>
                <DefaultText style={styles.text}>
                  {Math.round(
                    (LISTITEMS.filter((item) => {
                      return filters[4].name === item.categoryId;
                    }).length /
                      LISTITEMS.length) *
                      100
                  )}
                  %
                </DefaultText>
              </View>
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 10000,
                backgroundColor: "blue",
              }}
            ></View>
            <View style={styles.category}>
              <DefaultText style={styles.text}>Egyéb</DefaultText>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 80,
                }}
              >
                <DefaultText style={styles.text}>
                  {
                    LISTITEMS.filter((item) => {
                      return filters[5].name === item.categoryId;
                    }).length
                  }
                </DefaultText>
                <DefaultText style={styles.text}>
                  {Math.round(
                    (LISTITEMS.filter((item) => {
                      return filters[5].name === item.categoryId;
                    }).length /
                      LISTITEMS.length) *
                      100
                  )}
                  %
                </DefaultText>
              </View>
            </View>
          </View>
        </ScrollView>
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
