export type TBenefit = {
  title: string;
  text: string;
  img: string;
};

export type TSection = {
  id: number | string;
  title: string;
  description: string;
  img: string;
  categories: TCategory[];
};

export type TCategory = {
  id: number | string;
  sectionId: number | string;
  title: string;
  products: TProduct[];
};

export type TProduct = {
  id: number | string;
  vendorCode: string;
  categoryId: number | string;
  title: string;
  description: string;
  parameters: string[];
  img: string;
  price: number;
};
