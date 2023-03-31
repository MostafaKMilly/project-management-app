import { Components, Theme } from "@mui/material";

export const MenuStylesOverrides: Components<Theme>['MuiMenu'] = {
    defaultProps: {
        elevation: 2,
    },
    styleOverrides: {
        root: ({ theme }) => ({
            "& .MuiList-root": {
                padding: 0,
            },
            '& .MuiPaper-root': {
                marginTop: 8,
                marginRight: 32,
                minWidth: 180,
                boxShadow: theme.shadows[2]
            }
        })
    }
}