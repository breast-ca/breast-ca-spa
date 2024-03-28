export type EffectorAxiosError = {
  response: {
    data: {
      message: string;
      statusCode: number;
    };
  };
};
