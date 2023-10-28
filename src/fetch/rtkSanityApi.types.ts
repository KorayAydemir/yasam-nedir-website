import { QueryDefinition } from "@reduxjs/toolkit/query/react";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export type QueryDefForRtk = QueryDefinition<
    unknown,
    ({ query }: { query: string }) => Promise<
        | {
              data: Promise<object>;
              error?: undefined;
          }
        | {
              error: unknown;
              data?: undefined;
          }
    >,
    never,
    unknown,
    "sanityApi"
>;

export type EndpointBuilderType = EndpointBuilder<
    ({ query }: { query: string }) => Promise<
        | {
              data: Promise<object>;
              error?: undefined;
          }
        | {
              error: unknown;
              data?: undefined;
          }
    >,
    never,
    "sanityApi"
>;
