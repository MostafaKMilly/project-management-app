import { Components } from "@mui/material";

export const MenuItemStylesOverrides: Components['MuiMenuItem'] = {
    defaultProps: {
        disableRipple: true,
    },
    styleOverrides: {
        root: {
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
        }
    }
}