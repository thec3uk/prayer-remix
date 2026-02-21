import type { ICardProps } from "~/components/Card/Card.definition";

export interface IRequest {
  name: string;
  prayer: string;
  title: string;
  type: "prayer" | "praise";
  created_at: string;
  fromNow: string;
  response: string;
  count: number;
  id: string;
  location: string;
  flagged: boolean;
  pinned?: boolean;
}

export type IRequestForm = {
  title?: string;
  name?: string;
  prayer?: string;
  type: string;
  location?: string;
};

export interface ISetting {
  enabled: boolean;
  text: string;
  name: string;
}

export interface ILocation {
  id: string;
  name: string;
}

export interface IHomePageContent {
  subTitle: string;
  card: ICardProps;
}

export interface IBibleVerse {
  verse: string;
  content: string;
}

export interface IUserProfile {
  username: string;
  name: string;
  email: string;
  digestNotifications: boolean;
  responseNotifications: boolean;
}

export interface IResource {
  id: number;
  title: string;
  description: string;
  resource_type: "section" | "link" | "video" | "audio" | "text";
  section: number | null;
  section_name: string | null;
  url: string;
  content: string;
  sort_order: number;
}
