import { Text, Image, Flex, Grid, GridItem, Link } from "@chakra-ui/react";
import type { ICardProps } from "./Card.definition";

function Card({ title, subTitle, text, img, href }: ICardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      textTransform={"none"}
      _visited={{ textTransform: "none" }}
      _focus={{ textTransform: "none" }}
      _hover={{ textTransform: "none" }}
      color="white"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(5,1fr)" }}
        bgColor="teal.500"
        minHeight="xs"
      >
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <Flex
            h={"100%"}
            ml={{ base: 4, md: 6 }}
            flexDir="column"
            justifyContent={"center"}
            py={12}
          >
            <Text
              color="white"
              fontWeight="bold"
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              mb={{ base: 4, md: 6 }}
            >
              {title}
            </Text>
            <Text
              fontWeight="bold"
              color="white"
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              {subTitle}
            </Text>
            <Text color="white" fontSize={{ base: "xl", md: "2xl" }}>
              {text}
            </Text>
          </Flex>
        </GridItem>
        <GridItem h="full" w="full" colSpan={{ base: 1, md: 2 }}>
          <Image src={img} objectFit={"cover"} h="full" w="full" />
        </GridItem>
      </Grid>
    </Link>
  );
}

export default Card;
