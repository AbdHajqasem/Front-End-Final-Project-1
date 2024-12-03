import { IconButton } from "@mui/material";

export const SocialsButton = (props) => {
  return (
    <IconButton
      sx={{
        bgcolor: "#639599",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        color: "#1b4b66",
        ":hover": {
          bgcolor: "white",
        },
      }}
      href={props.href}
    >
      {props.children}
    </IconButton>
  );
};
