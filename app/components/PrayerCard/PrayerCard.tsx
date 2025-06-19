import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import type { IPrayerCardProps } from "./PrayerCard.definition";
import PrayerCardActions from "./PrayerCardActions";

const PrayerCard = ({ data, onAmen, onReport }: IPrayerCardProps) => {
  const bgColor = data.type == "praise" ? "yellow.500" : "teal.500";

  return (
    <Grid
      bgColor={"gray.100"}
      boxShadow={"0px 0px 2px rgba(0, 0, 0, 0.25)"}
      rowGap={4}
      alignContent={"space-between"}
      borderTop={"0.25em solid"}
      borderColor={bgColor}
      pt={8}
      pb={6}
      px={6}
    >
      <GridItem>
        <Text>{data.prayer}</Text>
      </GridItem>
      <GridItem>
        <Text fontWeight="bold" mb={2}>
          {`${data.name} ${data.location ? ` (${data.location})` : ""}`}
        </Text>
        <PrayerCardActions data={data} onAmen={onAmen} onReport={onReport} />
        {data.response && (
          <Flex
            flexDirection="column"
            gap={4}
            py={6}
            px={4}
            mt={3.5}
            bgColor={"gray.150"}
            borderRadius={8}
          >
            <Image src="/LogoBlack.png" h="30px" w="35px"></Image>
            {data.response}
          </Flex>
        )}
      </GridItem>
    </Grid>
  );
};

export default PrayerCard;
