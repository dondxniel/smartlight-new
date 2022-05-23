import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { Box, Button, Heading, HStack } from 'native-base'

//mocks
import { linedata } from '../mocks/'

//contants
import { width } from '../constants/dims'

const OverView = () => {
  return (
    <Box my={2} rounded={"2xl"} background={"#fff"}>
      <Heading p={4}>Overview</Heading>
      <LineChart
        bezier
        transparent
        withShadow={false}
        withVerticalLines={false}
        withHorizontalLines={false}
        withHorizontalLabels={false}
        height={200}
        data={linedata}
        width={width - 50}
        chartConfig={{
          color: () => `#4a60ddaa`,
          backgroundGradientFrom: "#5d6594aa",
          backgroundGradientTo: "#626db3",
          labelColor: () => `#181818`,
          style: {
            borderRadius: 16,
          },
        }}
      />

      <HStack
        justifyContent={"space-evenly"}
        space={"lg"}
        bgColor={"blue.50"}
        rounded={'2xl'}
        p={2}
        my={2}
        mx={2}
      >
        <Button colorScheme={"blue"} rounded={"2xl"}>
          1D
        </Button>
        <Button colorScheme={"blue"} rounded={"2xl"}>
          1W
        </Button>
        <Button colorScheme={"blue"} rounded={"2xl"}>
          1M
        </Button>
        <Button colorScheme={"blue"} rounded={"2xl"}>
          6M
        </Button>
        <Button colorScheme={"blue"} rounded={"2xl"}>
          1Y
        </Button>
        <Button colorScheme={"blue"} rounded={"2xl"}>
          5Y
        </Button>
      </HStack>
    </Box>

  )
}

const TransactionOverviewChart = React.memo(OverView);

export default TransactionOverviewChart;
