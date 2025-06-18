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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import Link from "~/components/Link";
import getEnv from "~/get-env";
import ChurchSuiteMark from "~/components/ChurchSuiteMark";
import { updateUserProfile } from "~/api/airTableApi";
import { useForm } from "react-hook-form";
import type { IUserProfile } from "~/types/global.definition";

const ManagePreferences = ({ user, profile }: IManagePreferencesProps) => {
  const loggedIn = !!user;
  const env = getEnv();
  const toast = useToast();
  const {register, handleSubmit} = useForm<IUserProfile>({
    defaultValues: {
      user: user?.id,
      digestNotifications: profile?.digestNotifications || true,
      responseNotifications: profile?.responseNotifications || true,
    },
  });

  const onSubmit = async (data:IUserProfile) => {
     try {
     await updateUserProfile(
        data,
        env.AIRTABLE_PAT as string,
        env.API_URL as string
    )
     toast({
        title: "Save",
        description: "Your preferences have been updated.",
        status: "success",
        duration: 5000,
        isClosable: true,
     })
     } catch (error) {
      console.error(error);
      toast({
        title: "Sorry",
        description: "Something went wrong, please try again.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
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
                {user.name}
              </Text>
              ,
            </Text>
            Update your notification preferences below.
          </Box>
          <Form name="update-notifications" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("responseNotifications")}
                  defaultChecked={profile?.responseNotifications || true}
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
                  {...register("digestNotifications")}
                  defaultChecked={profile?.digestNotifications || true}
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

              <Button type="submit">UPDATE MY NOTIFICATION SETTINGS</Button>
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
              href="/auth/login?redirect=/manage-preferences"
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
