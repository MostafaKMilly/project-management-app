import { Paper, styled } from "@mui/material";

export const FormContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: "8px",
  width: "600px",
  paddingTop: 24,
  paddingBottom: 24,
  display: "flex",
  rowGap: 14,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
}));
