import { Theme } from "@mui/material/styles";
// ----------------------------------------------------------------------

export default function Input(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[200],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[100],
          "&:hover": {
            backgroundColor: theme.palette.grey[100],
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[200],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[300],
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
}
