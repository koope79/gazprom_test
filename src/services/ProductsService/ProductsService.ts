import { IProductItemsResponse } from './../../reduxStore/products/types';
import { AxiosResponse } from 'axios';
import apiInstance from '../api';

export default {
    fetchProductItems(): Promise<AxiosResponse<IProductItemsResponse[]>> {
        return apiInstance.get(`/products/items`);
    },
    fetchProductItemsTwo(): Promise<AxiosResponse<IProductItemsResponse[]>> {
        return apiInstance.get(`/products/items2`);
    },
    fetchAnullProducts(anulledId: number) {
        return apiInstance.delete(`/products/items/${anulledId}`);
    }
}