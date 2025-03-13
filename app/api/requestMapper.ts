import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import type { IRequest } from "~/types/global.definition";

dayjs.extend(relativeTime);
// TODO: strongly type the air table response
export function mapResponseToPrayerPraiseRequests(
  airTableRecords: any
): IRequest[] {
  let requests = airTableRecords;
  if (!requests) {
    return [];
  }
  return requests.map((r: any) => {
    const date = dayjs(r.created_at);
    return {
      name: r.name,
      prayer: r.content,
      type: r.type,
      title: r.title,
      id: r.id,
      created_at: date.format("ddd DD MMM YYYY"),
      fromNow: date.fromNow(),
      count: r.prayer_count || 0,
      location: r.location_name || "",
    };
  });
}
