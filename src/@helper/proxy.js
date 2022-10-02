export const proxy = () => {
  const { NODE_ENV } = process.env;

  switch (NODE_ENV) {
    case "development":
      return "http://localhost:8080";
    default:
      return "https://api.cashhomestoday.com";
  }
};

export const uiProxy = () => {
  const { NODE_ENV } = process.env;

  switch (NODE_ENV) {
    case "development":
      return "http://localhost:3000";
    default:
      return "https://www.cashhomestoday.com";
  }
};

export const s3Proxy = () => {
  return "https://cash-homes-today.s3.us-west-2.amazonaws.com";
};
