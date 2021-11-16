export interface ResultItem {
  data: {
    center: string;
    date_created: Date | string;
    description: string;
    description_508: string;
    keywords: string[];
    media_type: string;
    nasa_id: string;
    secondary_creator: string;
    title: string;
  }[];
  href: string;
  links: {
    href: string;
    rel: string;
    render: string;
  }[];
}
