import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import type { IRequest } from "~/types/global.definition";

dayjs.extend(relativeTime);
// TODO: strongly type the air table response
export function mapResponseToPrayerPraiseRequests(airTableRecords: any): IRequest[] {
  let requests = airTableRecords.records;
  if (!requests) {
    return [];
  }
  return requests.map((r: any) => {
    const date = dayjs(r.fields.created_at);
    return {
      name: r.fields.name,
      prayer: r.fields.prayer,
      type: r.fields.type,
      title: r.fields.title,
      id: r.id,
      created_at: date.format("ddd DD MMM YYYY"),
      fromNow: date.fromNow(),
      count: r.fields["Prayer Count"] || 0,
      location: r.fields["Name (from Location)"]?.[0] || "",
    };
  });
}
