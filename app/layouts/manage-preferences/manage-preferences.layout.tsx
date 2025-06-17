import {
  Button,
  Heading,
  VStack,
  Box,
  Text,
  Checkbox,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import type { IManagePreferencesProps } from "./manage-preferences.definition";
import { Form } from "@remix-run/react";
import Link from "~/components/Link";

const ManagePreferences = ({ settings, user }: IManagePreferencesProps) => {
  // const handleSubmit = () => {
  //   console.log("submitted");
  // };

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
      <Box mb={10}>
        <Text mb={{ base: 2, md: 3 }}>
          Hi{" "}
          <Text as="span" fontWeight="bold">
            {user?.name || ''}
          </Text>
          ,
        </Text>
        Update your notification preferences below.
      </Box>
      <Form name="prayer-request">
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
            <Checkbox autoComplete="off" size="lg">
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
            <Checkbox autoComplete="off" size="lg">
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
    </Box>
  );
};

export default ManagePreferences;
