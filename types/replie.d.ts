export type Replie = {
  statuses: Status[];
  search_metadata: Searchmetadata;
}

export type Searchmetadata = {
  completed_in: number;
  max_id: number;
  max_id_str: string;
  next_results: string;
  query: string;
  refresh_url: string;
  count: number;
  since_id: number;
  since_id_str: string;
}

export type Status = {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: Entities;
  metadata: Metadata;
  source: string;
  in_reply_to_status_id: number;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id: number;
  in_reply_to_user_id_str: string;
  in_reply_to_screen_name: string;
  user: User;
  geo?: any;
  coordinates?: any;
  place?: any;
  contributors?: any;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  lang: string;
}

export type User = {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  entities: Entities2;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset?: any;
  time_zone?: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang?: any;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url?: any;
  profile_background_image_url_https?: any;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
}

export type Entities2 = {
  url: Url2;
  description: Description;
}

export type Description = {
  urls: any[];
}

export type Url2 = {
  urls: Url[];
}

export type Url = {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

export type Metadata = {
  iso_language_code: string;
  result_type: string;
}

export type Entities = {
  hashtags: any[];
  symbols: any[];
  user_mentions: Usermention[];
  urls: any[];
}

export type Usermention = {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}