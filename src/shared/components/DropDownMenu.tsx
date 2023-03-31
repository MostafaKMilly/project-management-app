import { MenuProps, ButtonProps, Menu } from "@mui/material";
import React from "react";

export const DropDownMenu = (props: DropDownMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { button, children, ...menuProps } = props;
  const buttonProps = {
    onClick: handleClick,
  };

  return (
    <>
      {button(buttonProps)}
      <Menu
        {...menuProps}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {children}
      </Menu>
    </>
  );
};

export type DropDownMenuProps = Partial<MenuProps> & {
  button: React.FunctionComponent<ButtonProps>;
};
