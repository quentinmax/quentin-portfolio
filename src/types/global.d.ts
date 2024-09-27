export {};

declare global {
  export type Project = {
    name: String;
    description: String;
    services: String[];
    tags: String[];
    projectType: string;
    thumb: {
      alt: string;
      asset: {
        _id: string;
        url: string;
      };
    };
    slug: {
      current: String;
      _type: String;
    };
    year: number;
    body: string;
  };
}
