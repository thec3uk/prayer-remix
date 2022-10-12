import type { ICarouselProps } from "./Carousel.definition";
import { Stack, Text, Box, IconButton, GridItem, Grid } from "@chakra-ui/react";
import Nuka from "nuka-carousel";
import CaretLeftIcon from "../CaretLeftIcon";
import CaretRightIcon from "../CaretRightIcon";

function Carousel({ items }: ICarouselProps) {
  const border = "1px solid rgba(255, 255, 255, 0.24)";

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
      w="full"
      minHeight="xs"
    >
      <GridItem colSpan={2}>
        <Text
          mt={{ base: 4, md: 8 }}
          ml={{ base: 4, md: 6 }}
          color="white"
          fontWeight="bold"
          as="h2"
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          Be inspired...
        </Text>
      </GridItem>
      <GridItem colSpan={3} borderLeft={{ base: "none", md: border }}>
        <Box mr={{ base: 4, md: 8 }} mb={2}>
          <Nuka
            slidesToShow={1}
            wrapAround={true}
            renderBottomRightControls={({ nextSlide, previousSlide }) => (
              <Box>
                <IconButton
                  variant={"link"}
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                    outlineOffset: "0px",
                    outlineColor: "none",
                  }}
                  onClick={previousSlide}
                  icon={<CaretLeftIcon h={{ base: 4, md: "auto" }} />}
                  aria-label="Show the previous set of resources in the resource carousel"
                />
                <IconButton
                  variant={"link"}
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                    outlineOffset: "0px",
                    outlineColor: "none",
                  }}
                  onClick={nextSlide}
                  ml={{ base: "none", md: 4 }}
                  icon={<CaretRightIcon h={{ base: 4, md: "auto" }} />}
                  aria-label="Show the next set of resources in the resource carousel"
                />
              </Box>
            )}
            renderBottomCenterControls={null}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
          >
            {items.map((item, idx) => (
              <Stack
                key={idx}
                mb={{ base: 10 }}
                mt={{ base: 4, md: 8 }}
                ml={4}
                gap={1}
              >
                <Text color="white" fontSize="2xl">
                  {item.title}
                </Text>
                <Text fontWeight="bold" color="teal.500">
                  {item.subTitle}
                </Text>
              </Stack>
            ))}
          </Nuka>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Carousel;
