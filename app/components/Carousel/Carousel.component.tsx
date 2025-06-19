import type { ICarouselProps } from "./Carousel.definition";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { Carousel as NukaCarousel } from "nuka-carousel";
import CaretLeftIcon from "../CaretLeftIcon";
import CaretRightIcon from "../CaretRightIcon";
import { useRef, useState } from "react";

function Carousel({ items }: ICarouselProps) {
  const border = "1px solid #A3A3A3";
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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
          <NukaCarousel
            wrapMode="wrap"
            swiping={true}
            // showArrows={false}
            ref={carouselRef}
            // @ts-expect-error slideIndex is supported but not typed in current d.ts
            slideIndex={currentSlide}
            afterSlide={(index: number) => setCurrentSlide(index)}
          >
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
          {items.length > 0 && (
            <Flex gap={2} alignSelf="flex-end" mr={4} mb={4}>
              <IconButton
                aria-label="Previous"
                icon={<CaretLeftIcon />}
                onClick={() => carouselRef.current?.goToPage(currentSlide - 1)}
                variant="ghost"
              />

              <IconButton
                aria-label="Next"
                icon={<CaretRightIcon />}
                onClick={() => carouselRef.current?.goToPage(currentSlide + 1)}
                variant="ghost"
              />
            </Flex>
          )}
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Carousel;
