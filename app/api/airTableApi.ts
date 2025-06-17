import type {
  IBibleVerse,
  IHomePageContent,
  ILocation,
  IRequest,
  IRequestForm,
  ISetting,
  IUserProfile,
} from "~/types/global.definition";
import type { IRequestFilters } from "./api.definition";
import { mapResponseToPrayerPraiseRequests } from "./requestMapper";

import fetch from "node-fetch";

export async function fetchRequests(
  { location }: IRequestFilters = {},
  AIRTABLE_PAT: string,
  API_URL: string
): Promise<IRequest[]> {
  const searchParams = new URLSearchParams({ location: location as string });
  const baseurl = `${API_URL}/prayer-requests/`;
  const url = location ? `${baseurl}?${searchParams.toString()}` : baseurl;
  const res = await fetch(url, {
    headers: {
      Authorization: `Token ${AIRTABLE_PAT}`,
    },
  });
  const response = await res.json();
  if (response.detail) {
    throw Error(response.detail);
  }
  return mapResponseToPrayerPraiseRequests(response);
}

export async function fetchSettings(
  AIRTABLE_PAT: string,
  API_URL: string
): Promise<ISetting[]> {
  const res = await fetch(`${API_URL}/settings/`);
  const settings = await res.json();
  return settings.map((setting: any) => ({
    enabled: setting.is_enabled,
    text: setting.button_text,
    name: setting.name,
  }));
}

export async function fetchUserProfile(
  AIRTABLE_PAT: string,
  API_URL: string
  // token: string
): Promise<IUserProfile | null> {
  const res = await fetch(`${API_URL}/user-profile/`, {
    headers: {
      // Authorization: `Token ${token}`,
      Authorization: `Token ${AIRTABLE_PAT}`,
    },
  });

  if (!res.ok) {
    // If the user profile is not found, return null instead of throwing an error
    return null;
    //throw new Error(`Failed to fetch user profile: ${res.status}`);
  }

  const data = await res.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("User profile not found.");
  }

  const profile = data[0];

  return {
    user: profile.user,
    digestNotifications: profile.enable_digest_notifications,
    responseNotifications: profile.enable_repsonse_notifications,
  };
}

export async function updateUserProfile(
  profile: IUserProfile,
  AIRTABLE_PAT: string,
  API_URL: string
  // token: string
): Promise<any> {
  const res = await fetch(`${API_URL}/preferences/update/`, {
    method: "POST",
      headers: {
        Authorization: `Token ${AIRTABLE_PAT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

  if (!res.ok) {
    throw new Error(`Failed to save settings: ${res.status}`);
  }

  return res.json();
}

export async function fetchVerses(
  AIRTABLE_PAT: string,
  API_URL: string
): Promise<IBibleVerse[]> {
  const res = await fetch(`${API_URL}/prayer-inspiration/`);
  const verses = await res.json();
  return verses;
}

export async function submitRequest(
  request: IRequestForm,
  AIRTABLE_PAT: string,
  API_URL: string
): Promise<any> {
  if (!request) {
    return false;
  }

  return await fetch(`${API_URL}/prayer-requests/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${AIRTABLE_PAT}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: request?.title,
      type: request.type,
      name: request?.name || "Anon",
      content: request?.prayer,
      location: request?.location,
    }),
  });
}

export async function incrementPrayerCount(
  id: string,
  currentCount: number,
  AIRTABLE_PAT: string,
  API_URL: string
): Promise<number> {
  const res = await fetch(
    `${API_URL}/prayer-requests/${id}/increment_prayer_count/`,
    {
      method: "POST",
      headers: {
        Authorization: `Token ${AIRTABLE_PAT}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  return data.prayer_count;
}

export async function fetchLocations(
  AIRTABLE_PAT: string,
  API_URL: string
): Promise<ILocation[]> {
  const res = await fetch(`${API_URL}/locations/`);
  const locations = await res.json();
  if (!locations) return [];
  return locations.map((location: { id: string; name: string }) => ({
    name: location.name,
    id: location.id,
  }));
}

export async function flagRequest(
  id: string,
  AIRTABLE_PAT: string,
  API_URL: string
): Promise<boolean> {
  const res = await fetch(`${API_URL}/prayer-requests/${id}/mark_flagged/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${AIRTABLE_PAT}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data.flagged_at;
}

export async function fetchHomePageContent(
  AIRTABLE_PAT: string,
  API_URL: string
): Promise<IHomePageContent> {
  const res = await fetch(`${API_URL}/content/`);
  const content = await res.json();
  const keyValuePairs: KeyValuePair[] = content.map(
    (record: KeyValuePair[]) => {
      return record;
    }
  );
  return {
    subTitle: getValue(keyValuePairs, "page_subtitle"),
    card: {
      title: getValue(keyValuePairs, "card_title"),
      subTitle: getValue(keyValuePairs, "card_subtitle"),
      href: getValue(keyValuePairs, "card_link"),
      text: getValue(keyValuePairs, "card_description"),
      img: "",
    },
  };
}

type KeyValuePair = { key: string; value: string };

function getValue(values: KeyValuePair[], key: string, defaultVal = "") {
  return values.find((f) => f.key === key)?.value || defaultVal;
}
