import { createClient } from "@supabase/supabase-js";
import { defineAction } from "astro:actions";
import { z } from "astro:content";
import type { Ischedules } from "@/interfaces/";

const url = "https://675c6d82fe09df667f63dd3c.mockapi.io/schedules?userUid=";
export const getAllByUidAction = defineAction({
  accept: "json",
  input: z.object({
    uid: z.string(),
  }),
  handler: async ({ uid }) => {
    const resp = await fetch(`${url}${uid}`);

    const error = !resp.ok;

    if (error) {
      throw new Error("Error fetching data");
    }

    const dataCollection: Ischedules[] = await resp.json();
    let data = dataCollection[0];

    return data;
  },
});
