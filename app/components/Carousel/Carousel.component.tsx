import type { ICarouselProps } from "./Carousel.definition";
import {
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { Carousel as NukaCarousel, useCarousel } from "nuka-carousel";
import CaretLeftIcon from "~/icons/CaretLeftIcon";
import CaretRightIcon from "~/icons/CaretRightIcon";

export function CustomArrows() {
  const { currentPage, totalPages, wrapMode, goBack, goForward } =
    useCarousel();
  const allowWrap = wrapMode === "wrap";
  const enablePrevNavButton = allowWrap || currentPage > 0;
  const enableNextNavButton = allowWrap || currentPage < totalPages - 1;

  return (
    <>
      <Flex gap={2} justifyContent="flex-end" mr={4} mb={4}>
        <IconButton
          aria-label="Previous"
          icon={<CaretLeftIcon />}
          onClick={goBack}
          variant="ghost"
          disabled={!enablePrevNavButton}
        />

        <IconButton
          aria-label="Next"
          icon={<CaretRightIcon />}
          onClick={goForward}
          variant="ghost"
          disabled={!enableNextNavButton}
        />
      </Flex>
    </>
  );
}

function Carousel({ items }: ICarouselProps) {
  const border = "1px solid #A3A3A3";
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
      w="full"
      minHeight="xs"
      bgColor="white"
    >
      <GridItem colSpan={2}>
        <Text
          mt={{ base: 4, md: 8 }}
          ml={{ base: 4, md: 6 }}
          fontWeight="bold"
          as="h2"
          color={"gray.500"}
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          Be inspired...
        </Text>
      </GridItem>
      <GridItem colSpan={3} borderLeft={{ base: "none", md: border }}>
        <Flex
          position="relative"
          flexDirection="column"
          overflowX={"hidden"}
          bgColor={"white"}
          bgImage="url(/logomark-transparent.svg)"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="right"
        >
          <NukaCarousel swiping={true} showArrows arrows={<CustomArrows />}>
            {items.map((item, idx) => (
              <Stack key={idx} w="full" minW="full" p={{ base: 4, md: 8 }}>
                <Text color={"gray.500"} fontSize="2xl">
                  {item.title}
                </Text>
                <Text fontWeight="bold" color="teal.500">
                  {item.subTitle}
                </Text>
              </Stack>
            ))}
          </NukaCarousel>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Carousel;
