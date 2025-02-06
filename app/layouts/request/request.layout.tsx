import {
  Button,
  Flex,
  FormErrorMessage,
  FormHelperText,
  Grid,
  Heading,
  Input,
  Radio,
  RadioGroup,
  VStack,
  StackDivider,
  Textarea,
  useToast,
  Box,
  Text,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { useForm, useWatch } from "react-hook-form";
import { submitRequest } from "~/api/airTableApi";
import type { IRequestForm, IRequestLayoutProps } from "./request.definition";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Form, useNavigate } from "@remix-run/react";
import PrayerHands from "~/components/PrayerHands";
import Praise from "~/components/Praise";
import getEnv from "~/get-env";

const RequestLayout = ({ locations }: IRequestLayoutProps) => {
  const env = getEnv();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IRequestForm>();
  const prayer = useWatch({ control, name: "prayer" });
  const toast = useToast();

  const onSubmit = async (data: any) => {
    try {
      await submitRequest(data, env.AIRTABLE_PAT as string, env.API_URL as string);
      navigate("/prayerwall");
      toast({
        title: "Thank you",
        description: "Your request has been submitted successfully.",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
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
    <Box px={{ base: 4, md: 8 }} maxWidth={{ base: "full", md: "container.lg" }}>
      <Heading as="h1" size="2xl" mb={{ base: 8, md: 12 }} textTransform="uppercase">
        Submit a request
      </Heading>

      <Text mb={{ base: 2, md: 3 }}>Thank you for bringing your prayer requests and praise reports.</Text>
      <Text mb={{ base: 2, md: 3 }}>
        These will be visible to anyone who views our online prayer wall and shown at our Sunday services during our
        prayer time. Please only use names if you have permission from the individual to do so.
      </Text>
      <Text mb={{ base: 4, md: 6 }}>
        If you wish to send a private prayer, please email{" "}
        <Link isExternal href="mailto:prayer@thec3.uk">
          prayer@thec3.uk
        </Link>
      </Text>
      <Form name="prayer-request" onSubmit={handleSubmit(onSubmit)}>
        <VStack mb={16} spacing={6} align="flex-start" divider={<StackDivider borderColor="#D9D9D9" />}>
          <FormControl maxWidth="container.sm">
            <FormLabel>Your name (optional)</FormLabel>
            <Input
              {...register("name", {
                required: true,
              })}
              autoComplete="name"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <RadioGroup>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                {locations.map((l) => (
                  <Radio size={"lg"} key={l.name} {...register("location")} value={l.id}>
                    {l.name}
                  </Radio>
                ))}
              </Grid>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Prayer or praise?</FormLabel>
            <RadioGroup>
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                <Radio {...register("type")} value={"prayer"} size={"lg"}>
                  Prayer <PrayerHands ml={1} w="24px" h="26px" />
                </Radio>
                <Radio {...register("type")} value={"praise"} size={"lg"}>
                  Praise <Praise ml={1} w="22px" h="26px" />
                </Radio>
              </Grid>
            </RadioGroup>
          </FormControl>
          <Flex flexDir="column" w={"100%"} alignItems="flex-end" gap={4}>
            <FormControl isInvalid={!!errors.prayer}>
              <FormLabel>Request</FormLabel>
              <Textarea
                {...register("prayer", {
                  required: true,
                  maxLength: 500,
                })}
                required
                autoComplete="off"
                size="md"
                maxLength={500}
              />
              <FormErrorMessage>Please keep the request to 500 characters.</FormErrorMessage>
              <FormHelperText color={"gray.500"}>{prayer?.length || 0} of 500 characters</FormHelperText>
            </FormControl>
            <FormControl isInvalid={!!errors.prayer}>
              <Checkbox required autoComplete="off" size="md">
                <FormLabel>
                  I consent to this prayer information to be visible on our online prayer wall and during our Sunday
                  services. See our{" "}
                  <Link isExternal href="https://thec3.uk/privacy">
                    privacy policy
                  </Link>{" "}
                  for more information
                </FormLabel>
              </Checkbox>
            </FormControl>
            <Button type="submit">Add Request</Button>
          </Flex>
        </VStack>
      </Form>
    </Box>
  );
};

export default RequestLayout;
