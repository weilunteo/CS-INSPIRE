import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import WidgetWrapper from "../components/WidgetWrapper";
import { toolkits } from "../constants";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  // Retrieve a random toolkit from the list
  const randomToolkit = toolkits[Math.floor(Math.random() * toolkits.length)];

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Popular Toolkits
        </Typography>
        <Typography color={medium}>For You</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`../src/assets/${randomToolkit.icon}`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main} sx={{ fontWeight: "bold" }}>{randomToolkit.bias_type} Bias</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        {randomToolkit.description}
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
