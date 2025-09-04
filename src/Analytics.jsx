import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-WEE56Q9YV4");
  }, [location.pathname]);

  useEffect(() => {
    // Send pageview for each route change
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  return null;
};

export default Analytics;
