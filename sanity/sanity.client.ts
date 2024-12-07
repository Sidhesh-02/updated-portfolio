import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "bkvrlxx2",
  dataset: "production",
  apiVersion: "2024-12-08",
  useCdn: false,
};

const client = createClient(config);

export default client;