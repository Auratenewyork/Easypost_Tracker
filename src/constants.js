// Currently use the same link for both environments
export const API_LINK =
  process.env.REACT_APP_ENV === "production"
    ? "https://4p9vek36rc.execute-api.us-east-2.amazonaws.com/api/tracking_information_"
    : "https://4p9vek36rc.execute-api.us-east-2.amazonaws.com/api/tracking_information_";
