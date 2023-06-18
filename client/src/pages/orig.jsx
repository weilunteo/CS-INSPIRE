import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "../components/Form";
import styles from "../style";

const Login = () => {

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (

    <div className={`h-screen flex items-center justify-center ${styles.paddingX}`}>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        borderRadius="1.5rem"
        backgroundColor= "#f5f5f5"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }} className="text-black" >
          Welcome!
        </Typography>
          <Form />
      </Box>

    </div>
  );
};

export default Login;