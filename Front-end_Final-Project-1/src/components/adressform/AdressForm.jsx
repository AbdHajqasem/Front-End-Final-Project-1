import React, { useImperativeHandle, forwardRef, useState } from "react";
import {
  Paper,
  Typography,
  Box,
  TextField,
  FormControl,
  FormLabel,
  Divider,
  FormHelperText,
} from "@mui/material";

const AddressForm = forwardRef(({ onSubmit }, ref) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (value.trim() !== "") setErrors({ ...errors, [field]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) newErrors[field] = `${field} is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  // Expose the handleSubmit method to the parent component
  useImperativeHandle(ref, () => ({
    submitForm: handleSubmit,
  }));

  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: "auto",
      }}
    >
      <Typography fontSize="20px" fontWeight="600" gutterBottom>
        Add New Address
      </Typography>
      <Divider />
      <Box
        sx={{
          mt: "35px",
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          width: "100%",
        }}
      >
        {/* First Name */}
        <FormControl fullWidth sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <FormLabel
            sx={{
              color: "#171520",
              fontSize: "16px",
              fontWeight: "500",
              mb: 1,
            }}
          >
            First Name
          </FormLabel>
          <TextField
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            error={!!errors.firstName}
            sx={{
              backgroundColor: "#F1F1F1",
              color: "#626262",
              fontSize: "16px",
              fontWeight: "500",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
            }}
          />
          {errors.firstName && (
            <FormHelperText error>{errors.firstName}</FormHelperText>
          )}
        </FormControl>

        {/* Last Name */}
        <FormControl fullWidth sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <FormLabel
            sx={{
              color: "#171520",
              fontSize: "16px",
              fontWeight: "500",
              mb: 1,
            }}
          >
            Last Name
          </FormLabel>
          <TextField
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            error={!!errors.lastName}
            sx={{
              backgroundColor: "#F1F1F1",
              color: "#626262",
              fontSize: "16px",
              fontWeight: "500",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
            }}
          />
          {errors.lastName && (
            <FormHelperText error>{errors.lastName}</FormHelperText>
          )}
        </FormControl>

        {/* Mobile */}
        <FormControl fullWidth sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <FormLabel
            sx={{
              color: "#171520",
              fontSize: "16px",
              fontWeight: "500",
              mb: 1,
              mt: 1.5,
            }}
          >
            Mobile Number
          </FormLabel>
          <TextField
            value={formData.mobile}
            onChange={(e) => handleInputChange("mobile", e.target.value)}
            error={!!errors.mobile}
            sx={{
              backgroundColor: "#F1F1F1",
              color: "#626262",
              fontSize: "16px",
              fontWeight: "500",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
            }}
          />
          {errors.mobile && (
            <FormHelperText error>{errors.mobile}</FormHelperText>
          )}
        </FormControl>

        {/* Email */}
        <FormControl fullWidth sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <FormLabel
            sx={{
              color: "#171520",
              fontSize: "16px",
              fontWeight: "500",
              mb: 1,
              mt: 1.5,
            }}
          >
            Email
          </FormLabel>
          <TextField
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            error={!!errors.email}
            sx={{
              backgroundColor: "#F1F1F1",
              color: "#626262",
              fontSize: "16px",
              fontWeight: "500",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
            }}
          />
          {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
        </FormControl>

        {/* Address */}
        <FormControl fullWidth sx={{ flex: "1 1 100%", mb: 5 }}>
          <FormLabel
            sx={{
              color: "#171520",
              fontSize: "16px",
              fontWeight: "500",
              mb: 1,
              mt: 1.5,
            }}
          >
            Address
          </FormLabel>
          <TextField
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            error={!!errors.address}
            sx={{
              backgroundColor: "#F1F1F1",
              color: "#626262",
              fontSize: "16px",
              fontWeight: "500",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
            }}
          />
          {errors.address && (
            <FormHelperText error>{errors.address}</FormHelperText>
          )}
        </FormControl>
      </Box>
    </Box>
  );
});

export default AddressForm;
