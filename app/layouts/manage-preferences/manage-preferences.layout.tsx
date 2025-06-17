import { useState } from "react";
import type { IManagePreferencesProps } from "./manage-preferences.definition";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
// import type { IManagePreferencesProps } from "./request.definition";
import { Form } from "@remix-run/react";
import Link from "~/components/Link";
import ChurchSuiteMark from "~/components/ChurchSuiteMark";

const ManagePreferences = ({ user, profile }: IManagePreferencesProps) => {
  const loggedIn = false;
  const [digest, setDigest] = useState(false);
  const [response, setResponse] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8001/api/preferences/update/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
      body: JSON.stringify({
        digest,
        response,
      }),
    });

    const result = await res.json();
    console.log("Preferences update result:", result);
  };

  return (
    <Box
      px={{ base: 4, md: 8 }}
      maxWidth={{ base: "full", md: "container.lg" }}
    >
      <Heading
        as="h1"
        size="2xl"
        mb={{ base: 8, md: 12 }}
        textTransform="uppercase"
      >
        Manage your notification preferences
      </Heading>
      {loggedIn ? (
        <>
          <Box mb={10}>
            <Text mb={{ base: 2, md: 3 }}>
              Hi{" "}
              <Text as="span" fontWeight="bold">
                {/* {profile.user} */}
              </Text>
              ,
            </Text>
            Update your notification preferences below.
          </Box>
          <Form name="prayer-request" onSubmit={handleSubmit}>
            <VStack
              mb={10}
              py={10}
              spacing={6}
              align="flex-start"
              borderBottom="1px solid"
              borderTop="1px solid"
              borderColor="gray.200"
            >
              <FormControl>
                <Checkbox
                  autoComplete="off"
                  size="lg"
                  isChecked={response}
                  onChange={(e) => setResponse(e.target.checked)}
                >
                  <FormLabel
                    textTransform="none"
                    fontWeight="regular"
                    fontSize="md"
                  >
                    Send me an email when The C3 Church responds to my requests
                  </FormLabel>
                </Checkbox>
              </FormControl>

              <FormControl>
                <Checkbox
                  autoComplete="off"
                  size="lg"
                  isChecked={digest}
                  onChange={(e) => setDigest(e.target.checked)}
                >
                  <FormLabel
                    textTransform="none"
                    fontWeight="regular"
                    fontSize="md"
                  >
                    Send me a daily email to let me know how many people are
                    engaging with my requests
                  </FormLabel>
                </Checkbox>
              </FormControl>

              <Button>UPDATE MY NOTIFICATION SETTINGS</Button>
            </VStack>
          </Form>
          <Box mb={10}>
            <Link
              href="/prayerwall"
              useButton={true}
              text="RETURN TO THE PRAYER WALL"
              aria-label="Return to the prayer wall"
            />
          </Box>
        </>
      ) : (
        <Flex gap={2} mb={40}>
          <Box>
            <ChurchSuiteMark />
          </Box>
          <Text>
            <Link
              // TO DO - update link
              href="https://login.churchsuite.com/"
              isExternal
              text="Sign into your ChurchSuite account"
              aria-label="Sign into your ChurchSuite account"
            />{" "}
            to manage your notification preferences
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default ManagePreferences;
