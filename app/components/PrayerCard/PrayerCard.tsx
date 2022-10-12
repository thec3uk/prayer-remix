import { Box, Flex, Text } from "@chakra-ui/react";
import type { IPrayerCardProps } from "./PrayerCard.definition";
import PrayerCardActions from "./PrayerCardActions";

const PrayerCard = ({
  data,
  onAmen,
  onReport,
  featureView = false,
}: IPrayerCardProps) => {
  const bgColor = data.type == "praise" ? "yellow.500" : "teal.500";

  return (
    <Box
      w="100%"
      mb={4}
      display="inline-block"
      bgColor="white"
      boxShadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
    >
      <Box w="100%" bgColor={bgColor} h={1}></Box>
      <Flex flexDir={"column"} p={5} gap={2}>
        <Text>{data.prayer}</Text>
        <Text fontWeight="bold">
          {`${data.name} ${data.location ? ` (${data.location})` : ""}`}
        </Text>
        {!featureView && (
          <PrayerCardActions data={data} onAmen={onAmen} onReport={onReport} />
        )}
      </Flex>
    </Box>
  );
};

export default PrayerCard;
