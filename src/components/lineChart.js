import { ResponsiveLine } from "@nivo/line";
import React, { Component } from "react";
import data from "./lineExampleData";

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.fakeData = data[0];
    this.fakeData.data[0].y = 0;
    this.fakeData.data[1].y = 0;
    this.fakeData.data[4].y = 0;
    this.fakeData.data[3].y = 0;

    this.state = { data: props.data, legend: props.legend };
  }
  render() {
    console.log(this.state.data);
    return (
      <ResponsiveLine
        data={this.state.data}
        margin={{
          top: 50,
          right: 110,
          bottom: 50,
          left: 60
        }}
        xScale={{
          type: "point"
        }}
        yScale={{
          type: "linear",
          stacked: true,
          min: "auto",
          max: "auto"
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: this.state.legend,
          legendOffset: 36,
          legendPosition: "middle"
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "111",
          legendOffset: -40,
          legendPosition: "middle"
        }}
        colors={{
          scheme: "nivo"
        }}
        pointSize={10}
        pointColor={{
          theme: "background"
        }}
        pointBorderWidth={2}
        pointBorderColor={{
          from: "serieColor"
        }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    );
  }
}

export default LineChart;
