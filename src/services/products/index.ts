import {apiPageUrls}  from '@Constants';
import { ProductModel } from '@Models/ProductModel';
import httpService from '@Core/http';
import { ProductPayload } from './ProductsPayload';
import { AxiosError } from 'axios';


const getProductList = async (payloads:ProductPayload): Promise<ProductModel> => {
  const {productListPath} = apiPageUrls;
  const apiParams = {
    url: `${productListPath}`,
    method: 'GET',
    params:payloads
  }
  try {

    const response = await httpService(apiParams)
    const result = response.data as ProductModel;
  
    return result;
  } catch (error) {
   
    console.error('Hata:', error);   
    throw error; 
  }
};

export const ProductServices = {
  getProductList
}




