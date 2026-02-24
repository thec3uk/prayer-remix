import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Heading, Icon, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Card from "~/components/Card";
import Carousel from "~/components/Carousel";
import Link from "~/components/Link";
import type { IHomeProps } from "./home.definition";

const ResourceTypeLabel: Record<string, string> = {
  video: "Video",
  link: "Link",
  audio: "Audio",
  text: "Guide",
};

const HomeLayout = ({ link, verses, card, subTitle, featuredResource }: IHomeProps) => {
  const sectionMargin = { base: 6, md: 12 };
  return (
    <Box px={{ base: 3, md: 4 }}>
      <Grid
        as="section"
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        mb={sectionMargin}
      >
        <Flex alignItems="center" mr={5}>
          <Box maxW={{ md: "xl" }}>
            <Box>
              <Heading
                as="h1"
                size="3xl"
                mb={{ base: 4, md: 6 }}
                textTransform="uppercase"
              >
                The{" "}
                <Box as="span" color="teal">
                  Tim Creamer
                </Box>{" "}
                Prayer Room
              </Heading>
              <Text fontWeight="bold" size="lg" mb={{ base: 4, md: 6 }}>
                a time to be silent and a time to speak
              </Text>
              <Text size="md" mb={{ base: 4, md: 6 }}>
                {subTitle ||
                  "This space was created in honour of Tim Creamer. A man of passionate faith who was always first to pray. Sadly missed but an inspiration to us all to run the race with perseverance'."}
              </Text>
              <Link
                href="/prayerwall"
                useButton
                text="Go to prayer wall"
                aria-label="Go to Prayer Wall"
                buttonProps={{
                  rightIcon: <ArrowForwardIcon />,
                }}
              />
            </Box>
          </Box>
        </Flex>
        <Image
          display={{ base: "none", md: "block" }}
          src="/home-main.jpeg"
          alt="People praying"
        ></Image>
      </Grid>
      <Box as="section" maxW={{ md: "1028px" }} mb={sectionMargin}>
        <Card
          title={card?.title || "Weekly Prayer meetings"}
          subTitle={card?.subTitle || "Join us on Zoom"}
          text={card?.text || "Daily at 7.30am & 7.30pm"}
          img="/home-card.jpeg"
          href={card?.href || link?.text}
        ></Card>
      </Box>
      {featuredResource && (
        <Box as="section" maxW={{ md: "1028px" }} mb={sectionMargin}>
          <Flex justify="space-between" align="baseline" mb={4}>
            <Heading as="h2" size="md" textTransform="uppercase">
              Featured Resource
            </Heading>
            <Link
              href="/resources"
              text="View all resources"
              buttonProps={{ rightIcon: <ArrowForwardIcon />, size: "sm" }}
              useButton
            />
          </Flex>
          <ChakraLink
            href={featuredResource.url || "/resources"}
            isExternal={!!featuredResource.url}
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              bg="white"
              p={6}
              shadow="base"
              align="center"
              justify="space-between"
              transition="box-shadow 0.2s"
              _hover={{ shadow: "md" }}
            >
              <Box>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="teal.500"
                  textTransform="uppercase"
                  mb={1}
                >
                  {featuredResource.section_name
                    ? `${featuredResource.section_name} · ${ResourceTypeLabel[featuredResource.resource_type] || featuredResource.resource_type}`
                    : ResourceTypeLabel[featuredResource.resource_type] || featuredResource.resource_type}
                </Text>
                <Heading as="h3" size="sm" mb={1}>
                  {featuredResource.title}
                </Heading>
                <Text color="gray.400" fontSize="sm">
                  {featuredResource.description}
                </Text>
              </Box>
              {featuredResource.url && (
                <Icon as={ExternalLinkIcon} color="teal.500" boxSize={5} ml={4} flexShrink={0} />
              )}
            </Flex>
          </ChakraLink>
        </Box>
      )}
      {verses.length > 0 && (
        <Box
          as="section"
          maxW={{ md: "1028px" }}
          mb={sectionMargin}
          filter={"drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1))"}
        >
          <Carousel
            items={verses.map((v) => ({
              title: v.content,
              subTitle: v.verse,
            }))}
          ></Carousel>
        </Box>
      )}
    </Box>
  );
};

export default HomeLayout;
