import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { fetchRequests } from "~/api/airTableApi";
import type { IRequest } from "~/types/global.definition";
import { Box, Switch, useColorMode } from "@chakra-ui/react";
import PrayerCard from "~/components/PrayerCard";

export const loader: LoaderFunction = async () => {
  console.log("load");
  const requests = await fetchRequests({ maxRecords: "1000" });
  return { requests };
};

const PrayerWall = () => {
  const data = useLoaderData<{
    requests: IRequest[];
  }>();
  const { toggleColorMode } = useColorMode();
  return (
    <Box>
      <Box overflow="visible">
        <Box
          mt={33}
          w="100%"
          sx={{
            columnCount: [1, 1, 1, 2, 3],
            columnGap: 4,
          }}
        >
          {data.requests.map((request) => (
            <PrayerCard
              featureView
              data={request}
              key={request.id}
            ></PrayerCard>
          ))}
        </Box>
        <Box my={5}>
          <Switch id="theme-switch" size="sm" onChange={toggleColorMode} />
        </Box>
      </Box>
    </Box>
  );
};

export default PrayerWall;
