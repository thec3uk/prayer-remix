import { Flex, Button, Circle, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import Flag from "~/icons/Flag";
import PrayerHands from "~/icons/PrayerHands";
import Praise from "~/icons/Praise";
import type { IPrayerCardProps } from "../PrayerCard.definition";

function PrayerCardActions({ data, onAmen, onReport }: IPrayerCardProps) {
  const [counter, setCounter] = useState(data.count);
  const circleColor = data.type == "praise" ? "#FDF0CE" : "#DDF3F5";
  const borderColor = data.type == "praise" ? "#DA9B00" : "#00919F";
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      flexWrap="wrap"
      gap={{ base: 2 }}
      justifyContent="space-between"
      alignItems="baseline"
    >
      <Flex justifyContent="flex-start" gap={2} alignItems="baseline">
        <Text title={data.created_at}>{data.fromNow}</Text>
        <Box w={0.5} h={4} bgColor="gray.200"></Box>
        {onReport && (
          <Flex
            gap={"inherit"}
            alignItems={"baseline"}
            as="button"
            onClick={() => onReport(data.id)}
          >
            <Flag color={data.flagged ? "gray.500" : "white"} />
            <Text textDecor={"underline"}>Report</Text>
          </Flex>
        )}
      </Flex>
      {onAmen && (
        <Button
          leftIcon={
            data.type == "praise" ? (
              <Praise w="24px" h="26px" />
            ) : (
              <PrayerHands w="24px" h="26px" />
            )
          }
          variant="outline"
          borderColor={borderColor}
          fontSize="sm"
          display="flex"
          justifyContent={"space-between"}
          onClick={() => {
            onAmen(data.id, counter);
            setCounter(counter + 1);
          }}
          w={33}
          h={12}
          px={2}
          py={4}
        >
          {data.type === "prayer" ? "Pray" : "Praise"}
          <Circle p={"10px"} bg={circleColor} borderRadius="50%" size={6}>
            {counter}
          </Circle>
        </Button>
      )}
    </Flex>
  );
}

export default PrayerCardActions;
