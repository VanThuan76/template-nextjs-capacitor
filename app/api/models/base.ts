export interface IBaseResponse<T> {
    status_code: number | string;
    data: T;
    message: string;
}
export interface IBaseResponseWithCount<T> {
    data: T;
    total_pages: number;
    total_elements: number;
    message: string;
}
export interface IBaseResponseWithoutPageable<T> {
    data: T;
    status_code: number;
    total: number;
    message: string;
}
export interface IError {
    code: number;
    message: string;
    errors?: any[];
}