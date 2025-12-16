import { Flex, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";

import Praise from "~/icons/Praise";
import PrayerHands from "~/icons/PrayerHands";
import PrayerModal from "../PrayerModal";
import type { IFeaturePrayerCardProps } from "./FeaturePrayerCard.definition";

const FeaturePrayerCard = ({ data }: IFeaturePrayerCardProps) => {
  const bgColor = data.type == "praise" ? "yellow.500" : "teal.500";
  const textColor = useColorModeValue("inherit", "whiteAlpha.900");
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      bgColor={useColorModeValue("white", "gray.800")}
      boxShadow={useColorModeValue(
        "0px 0px 2px rgba(0, 0, 0, 0.25)",
        "0px 0px 2px rgba(255, 255, 255, 0.25)"
      )}
      p={5}
      alignContent={"space-between"}
      borderTop={"0.25em solid"}
      borderColor={bgColor}
      _hover={{
        cursor: "pointer",
      }}
      w={"100%"}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex justifyContent={"flex-end"}>
        {data.type == "praise" ? (
          <Praise w="24px" h="26px" />
        ) : (
          <PrayerHands w="24px" h="26px" />
        )}
      </Flex>
      <Text color={textColor} size={"xl"} mb={2} mt={2} onClick={onOpen}>
        {data.prayer}
      </Text>
      <Flex direction="row" justifyContent={"space-between"}>
        <Text fontWeight="bold" color={textColor} mb={2}>
          {`${data.name} ${data.location ? ` (${data.location})` : ""}`}
        </Text>
      </Flex>
      <PrayerModal
        prayer={data.prayer}
        name={data.name}
        location={data.location}
        bgColor={bgColor}
        isOpen={isOpen}
        onClose={onClose}
      ></PrayerModal>
    </Flex>
  );
};

export default FeaturePrayerCard;
