import * as prismic from "@prismicio/client";

const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT;
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_CLIENT_SECRET;

export const client = prismic.createClient(apiEndpoint, {
  accessToken,
});
