export type SiteEntity = {
  name: string;
  type: "WebSite";
  description: string;
  logo: string;
  language: string;
};

export type OptionalEntity = {
  enabled: boolean;
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: string;
};
