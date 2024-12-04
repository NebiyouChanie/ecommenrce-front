export interface Billboard {
    id: String;
    label: String;
    imageUrl: String;
};

export interface Category {
    id: String;
    name: String;
    billboard: Billboard;
};

export interface Product {
    id: String;
    category: String;
    name: String;
    price: String;
    size: String;
    color: String;
    isFeatured: boolean;
    images: Image[];
};

export interface Image {
    id: String;
    url: String;
};


export interface Size {
    id: String;
    name: String;
    value: String;
};



