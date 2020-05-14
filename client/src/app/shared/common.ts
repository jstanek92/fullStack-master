export const call = <T>(
  callback: Promise<any>
): Promise<{
  error: string;
  data: T;
}> => {
  return new Promise((resolve, reject) => {
    callback
      .then(data => {
        resolve({
          error: null,
          data: data
        });
      })
      .catch(error => {
        resolve({
          error: error,
          data: null
        });
      });
  });
};
