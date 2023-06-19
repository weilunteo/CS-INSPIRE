import React from 'react';
import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/state";
import FlexBetween from "../components/FlexBetween";
import styles from "../style";
import toast, { Toaster } from 'react-hot-toast';

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

    const handleFormSubmit = async (values) => {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log("Response:", response);
        console.log("Data:", data);
        if (response.ok) {
          if (data.success) {
            dispatch(
              setLogin({
                user: data.user,
                token: data.token,
              })
            );
            handleSuccess("Login successful!");
            setTimeout(() => {
              navigate("/pre-quiz");
            }, 1000);
          } else {
            handleError(data.message || "Login failed. Please try again.");
          }
        } else {
          handleError(data.message || "Login failed. Please try again.");
        }
      } catch (error) {
        handleError("An error occurred. Please try again.");
      }
    };
    
    

  return (
    
    <div className={`h-screen flex items-center justify-center ${styles.paddingX}`}>
       <Toaster/>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        borderRadius="1.5rem"
        backgroundColor="#f5f5f5"
      >
        <Typography variant="h5" sx={{ mb: "2rem",fontWeight: "bold"}}>
          Welcome back!
        </Typography>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <Box sx={{ gridColumn: "span 4", mb: "2rem"  }}>
                <TextField
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                />
              </Box>

              {/* Password Input */}
              <Box sx={{ gridColumn: "span 4" }}>
                <TextField
                  label="Password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  fullWidth
                />
              </Box>

              {/* Login Button */}
              <Box>
                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: palette.primary.main,
                    color: palette.background.alt,
                    "&:hover": { color: palette.primary.main },
                  }}
                >
                  LOGIN
                </Button>
                <Typography
                  onClick={() => {
                    // Navigate to the register page
                    navigate("/register");
                    resetForm();
                  }}
                  sx={{
                    textDecoration: "underline",
                    color: palette.primary.main,
                    "&:hover": {
                      cursor: "pointer",
                      color: palette.primary.light,
                    },
                  }}
                >
                  Don't have an account? Sign up
                </Typography>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Login;
