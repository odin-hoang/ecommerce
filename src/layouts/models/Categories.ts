export interface Category {
   id: number;
   name: string;
   parentName: string | null;
   level: number;
   hasChildren?: boolean;
}
export interface Banner {
   id: number;
   imageUrl: string;
   title: string;
   imageUrlMobile: string;
}
export interface Product {
   id: number;
   name: string;
   rate: number;
   reviews: number;
   comments: number;
   prices: [{}];
   description: string;

   directory: string;
   specification: string;
   unit: string;
   pills?: number;
}
