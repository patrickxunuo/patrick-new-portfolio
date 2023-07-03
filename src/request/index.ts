import { createClient } from "contentful";
import { loadEvents } from "../store/eventSlice.ts";

export const getEvents = () => async (dispatch) => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN,
  });
  const res = await client.getEntries({
    content_type: "portfolioEvent",
    order: "fields.id",
  });

  dispatch(loadEvents(res.items?.map((item) => item.fields)));
};
