import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "3uufffa7",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});
