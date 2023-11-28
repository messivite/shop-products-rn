export const sortingOptions: Record<
  string,
  ['price' | 'rating', 'toHigh' | 'toLow']
> = {
  'price_low-to-high': ['price', 'toHigh'],
  'price_high-to-low': ['price', 'toLow'],
  rating_asc: ['rating', 'toHigh'],
  rating_desc: ['rating', 'toLow'],
};
