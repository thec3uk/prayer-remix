import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import type { IResource } from "~/types/global.definition";
import type { IResourcesProps } from "./resources.definition";

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function SectionHeader({ resource }: { resource: IResource }) {
  return (
    <Box pt={8} pb={4}>
      <Heading as="h2" size="lg" mb={2}>
        {resource.title}
      </Heading>
      {resource.description && (
        <Text color="gray.400" fontSize="lg">
          {resource.description}
        </Text>
      )}
      <Divider mt={4} borderColor="gray.200" />
    </Box>
  );
}

function VideoResource({ resource }: { resource: IResource }) {
  const videoId = getYouTubeId(resource.url);
  return (
    <Box
      bg="white"
      p={6}
      shadow="base"
      mb={4}
    >
      {videoId && (
        <Box
          position="relative"
          pb="56.25%"
          height={0}
          overflow="hidden"
          mb={4}
          borderRadius="md"
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={resource.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      )}
      <Heading as="h3" size="sm" mb={1}>
        {resource.title}
      </Heading>
      <Text color="gray.400" fontSize="sm">
        {resource.description}
      </Text>
    </Box>
  );
}

function LinkResource({ resource }: { resource: IResource }) {
  return (
    <Link
      href={resource.url}
      isExternal
      _hover={{ textDecoration: "none" }}
    >
      <Flex
        bg="white"
        p={6}
        shadow="base"
        mb={4}
        align="center"
        justify="space-between"
        transition="box-shadow 0.2s"
        _hover={{ shadow: "md" }}
      >
        <Box>
          <Heading as="h3" size="sm" mb={1}>
            {resource.title}
          </Heading>
          <Text color="gray.400" fontSize="sm">
            {resource.description}
          </Text>
        </Box>
        <Icon as={ExternalLinkIcon} color="teal.500" boxSize={5} ml={4} flexShrink={0} />
      </Flex>
    </Link>
  );
}

function AudioResource({ resource }: { resource: IResource }) {
  return (
    <Link
      href={resource.url}
      isExternal
      _hover={{ textDecoration: "none" }}
    >
      <Flex
        bg="white"
        p={6}
        shadow="base"
        mb={4}
        align="center"
        justify="space-between"
        transition="box-shadow 0.2s"
        _hover={{ shadow: "md" }}
      >
        <Flex align="center" gap={4}>
          <Flex
            align="center"
            justify="center"
            bg="teal.50"
            borderRadius="full"
            w={10}
            h={10}
            flexShrink={0}
          >
            <MusicIcon />
          </Flex>
          <Box>
            <Heading as="h3" size="sm" mb={1}>
              {resource.title}
            </Heading>
            <Text color="gray.400" fontSize="sm">
              {resource.description}
            </Text>
          </Box>
        </Flex>
        <Icon as={ExternalLinkIcon} color="teal.500" boxSize={5} ml={4} flexShrink={0} />
      </Flex>
    </Link>
  );
}

function TextResource({ resource }: { resource: IResource }) {
  return (
    <Box
      bg="white"
      p={6}
      shadow="base"
      mb={4}
    >
      <Heading as="h3" size="sm" mb={3}>
        {resource.title}
      </Heading>
      {resource.description && (
        <Text color="gray.400" fontSize="sm" mb={3}>
          {resource.description}
        </Text>
      )}
      <Box
        fontSize="md"
        lineHeight="tall"
        sx={{
          "p": { mb: 3 },
          "strong": { fontWeight: "bold" },
          "em": { fontStyle: "italic" },
          "ul, ol": { pl: 6, mb: 3 },
          "li": { mb: 1 },
        }}
      >
        <ReactMarkdown>{resource.content}</ReactMarkdown>
      </Box>
    </Box>
  );
}

function MusicIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--chakra-colors-teal-500)" }}
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function ResourceItem({ resource }: { resource: IResource }) {
  switch (resource.resource_type) {
    case "video":
      return <VideoResource resource={resource} />;
    case "link":
      return <LinkResource resource={resource} />;
    case "audio":
      return <AudioResource resource={resource} />;
    case "text":
      return <TextResource resource={resource} />;
    default:
      return null;
  }
}

const ResourcesLayout = ({ resources }: IResourcesProps) => {
  const sorted = [...resources].sort((a, b) => a.sort_order - b.sort_order);

  return (
    <Box px={{ base: 3, md: 4 }} pb={12}>
      <Heading as="h1" size="xl" mb={2} textTransform="uppercase">
        Resources
      </Heading>
      <Text color="gray.400" mb={6}>
        Guides, videos, and links to help you in your prayer life.
      </Text>

      <VStack align="stretch" maxW="4xl" spacing={0}>
        {sorted.map((resource) =>
          resource.resource_type === "section" ? (
            <SectionHeader key={resource.id} resource={resource} />
          ) : (
            <ResourceItem key={resource.id} resource={resource} />
          )
        )}
      </VStack>
    </Box>
  );
};

export default ResourcesLayout;
