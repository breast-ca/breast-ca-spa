export type EffectorAxiosError = {
  response: {
    data: {
      message: string;
      statusCode: number;
    };
  };
};

export enum OrderByRule {
  Ascending = "Ascending",
  Descending = "Descending",
}