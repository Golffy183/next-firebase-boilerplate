export const MappingObject = (input: any, tranFunc: any): string => {
  if (!input) {
    return '';
  }
  if (typeof input === 'string' || input instanceof String) {
    return tranFunc(input) || '';
  }

  if (typeof input === 'object' || input instanceof Object) {
    if ('key' in input) {
      return tranFunc(input.key, 'option' in input ? input.option : undefined);
    }
  }
  return '';
};
