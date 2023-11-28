import { SORTINGTYPES } from '@Constants';
import { IProduct } from '@Models/ProductModel';
import { useProductSelector } from '@Redux/slices/products';

const useGeneralHelper = () => {
  const productState = useProductSelector();
  const { productData } = productState;
  const sortingProduct = (
    type: 'price' | 'rating',
    sortMethod: 'toLow' | 'toHigh',
  ): IProduct[] | null => {
    const newProductData = [...productData];
    const sortedArray = newProductData.sort((a, b) => {
      const paramA = type === SORTINGTYPES.TOPRICE ? a.price : a.rating;
      const paramB = type === SORTINGTYPES.TOPRICE ? b.price : b.rating;

      return sortMethod === SORTINGTYPES.TOHIGH
        ? paramA - paramB
        : paramB - paramA;
    });

    return sortedArray;
  };

  const capitalizeFirstLetter = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const convertToHumanReadable = (filterName: string): string => {
    let words = filterName.split('-');
    for (let i = 0; i < words.length; i++) {
      words[i] = capitalizeFirstLetter(words[i]);
    }

    let result = words.join(' ');

    return result;
  };
  return {
    sortingProduct,
    capitalizeFirstLetter,
    convertToHumanReadable,
  };
};

export default useGeneralHelper;
