import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";

import { colors, palette } from "../theme";

const drawerWidth = 256;

export default function ClippedDrawer({
  isDrawerOpen,
  handleDrawerClose,
}: {
  isDrawerOpen: boolean;
  handleDrawerClose: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(4);

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const shouldBrawerBePermanent = useMediaQuery("(min-width:900px)");

  return (
    <Drawer
      variant={shouldBrawerBePermanent ? "permanent" : "temporary"}
      open={isDrawerOpen}
      onClose={handleDrawerClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: palette.info.darker,
          color: palette.primary.contrast,
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {[
            "訂位列表",
            "訂位功能狀態",
            "店家營業資訊",
            "訂位公告提醒",
            "訂位規則",
            "可訂人數與桌位",
          ].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                borderLeft:
                  index === selectedIndex
                    ? `4px solid ${colors.blueMuncell[700]}`
                    : "0",
                [`& .MuiListItemButton-root`]: {
                  paddingInlineStart: 2,
                  paddingInlineEnd: 1,
                  paddingBlock: 1.5,
                },
              }}
            >
              <ListItemButton
                disableRipple
                onClick={(event) => handleListItemClick(event, index)}
                sx={{
                  [`&:hover`]: {
                    backgroundColor:
                      index === selectedIndex
                        ? colors.blue[700]
                        : "transparent",
                  },
                  backgroundColor:
                    index === selectedIndex ? colors.blue[700] : "transparent",
                }}
              >
                <ListItemText
                  primary={text}
                  sx={{
                    [`& .MuiTypography-root`]: {
                      fontWeight: index === selectedIndex ? 700 : 400,
                      color: "white",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
