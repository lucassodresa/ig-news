import { createClient } from "@prismicio/client";

export const prismicClient = createClient(process.env.PRISMIC_REPOSITORY_NAME, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});
