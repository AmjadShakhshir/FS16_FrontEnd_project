export type Category = {
    name: string;
    images: string[];
    _id: string;
};

export type AddCategoryRequest = Omit<Category, '_id'>;

export interface UpdateCategoryDto {
    name: string;
    images: string[];
}
export interface UpdateCategoryRequest {
    _id: string;
    update: UpdateCategoryDto;
}