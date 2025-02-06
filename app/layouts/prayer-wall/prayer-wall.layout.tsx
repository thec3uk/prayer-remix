import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Flex,
  useBreakpointValue,
  Drawer,
  useDisclosure,
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { flagRequest, incrementPrayerCount } from "~/api/airTableApi";
import Filters from "~/components/Filters";
import type { IFilterOptions, IFiltersProps } from "~/components/Filters/Filters.definition";
import FiltersIcon from "~/components/FiltersIcon";
import Link from "~/components/Link";
import Masonry from "react-masonry-css";
import PrayerCard from "~/components/PrayerCard";
import type { IRequest } from "~/types/global.definition";
import type { IPrayerWallProps } from "./prayer-wall.definition";
import getEnv from "~/get-env";

const env = getEnv();

const makeToast = (title: string, description: string, status: "success" | "error") => ({
  title,
  description,
  status,
  duration: 10000,
  isClosable: true,
});

const PrayerWallLayout = ({ requests, locations }: IPrayerWallProps) => {
  const toast = useToast();

  const text = useBreakpointValue({
    base: "Add a request",
    md: "Add a prayer request",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filteredRequests, setFilteredRequests] = useState<IRequest[]>(requests);
  const [filters, setFilters] = useState<IFilterOptions>({
    location: "all",
    type: "both",
  });

  useEffect(() => {
    const reqs = requests.filter(
      (r) =>
        (r.location === filters.location || filters.location === "all") &&
        (r.type === filters.type || filters.type === "both")
    );
    setFilteredRequests(reqs);
  }, [filters, requests]);

  const applyFilters = (opts: IFilterOptions) => {
    setFilters(opts);
  };

  const Shared = ({ initialFilters, onChange, locations }: IFiltersProps) => (
    <Filters initialFilters={initialFilters} onChange={onChange} locations={locations} />
  );

  const amen = async (id: string, count: number) => {
    await incrementPrayerCount(id, count, env.AIRTABLE_PAT as string, env.API_URL as string);
  };

  const report = async (id: string) => {
    const resp = await flagRequest(id, env.AIRTABLE_PAT as string, env.API_URL as string);
    if (resp) {
      toast(makeToast("Thank you", "We have flagged the request and will review shortly.", "success"));
    } else {
      toast(makeToast("Sorry", "Something went wrong, please try again or contact us.", "error"));
    }
  };
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Box px={{ base: 3, md: 4 }} minH={"75vh"}>
      <Heading as="h1" size="2xl" mb={{ base: 6, md: 8 }} textTransform="uppercase">
        Prayer Wall
      </Heading>
      {locations && (
        <Flex flexDir="row" justifyContent="space-between" alignItems="center">
          <Flex display={{ base: "block", lg: "none" }} flexDir="column">
            <FiltersIcon h={"23px"} w={"24px"} onClick={onOpen}></FiltersIcon>
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Filters</DrawerHeader>
                <DrawerBody>
                  <Shared initialFilters={filters} onChange={applyFilters} locations={locations} />
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    variant="outline"
                    mr={3}
                    onClick={() => {
                      setFilters({
                        location: "all",
                        type: "both",
                      });
                    }}>
                    Clear
                  </Button>
                  <Button onClick={onClose}>Close</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
          <Box display={{ base: "none", lg: "flex" }}>
            <Shared initialFilters={filters} onChange={applyFilters} locations={locations} />
          </Box>
          <Link
            href="/request"
            useButton={true}
            text={text}
            aria-label={text}
            buttonProps={{
              leftIcon: <AddIcon />,
              size: { base: "xs", md: "md" },
            }}
          />
        </Flex>
      )}
      {filteredRequests.length ? (
        <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
          {filteredRequests.map((request) => (
            <PrayerCard data={request} key={request.id} onAmen={amen} onReport={report}></PrayerCard>
          ))}
        </Masonry>
      ) : (
        <Box mt={8}>
          <Text mb={2}>Looks like we couldn't find any requests that matched your filter.</Text>
          <Text mb={4}>Why not click the button below to submit your request and get us started?</Text>
          <Link
            href="/request"
            useButton={true}
            text={"Add a prayer request"}
            aria-label={"Add a prayer request"}
            buttonProps={{
              rightIcon: <ArrowForwardIcon />,
              size: { base: "xs", md: "md" },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default PrayerWallLayout;
