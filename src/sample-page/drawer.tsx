import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { palette } from "../theme";

const drawerWidth = 256;

export default function ClippedDrawer() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      variant="permanent"
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
                borderLeft: index === selectedIndex ? "4px solid #0099B5" : "0",
              }}
            >
              <ListItemButton
                disableRipple
                onClick={(event) => handleListItemClick(event, index)}
                sx={{
                  [`&:hover`]: {
                    backgroundColor:
                      index === selectedIndex ? "#1264A3" : "transparent",
                  },
                  backgroundColor:
                    index === selectedIndex ? "#1264A3" : "transparent",
                }}
              >
                <ListItemText
                  primary={text}
                  sx={{
                    [`& .MuiListItemText-primary`]: {
                      fontWeight: index === selectedIndex ? 700 : 400,
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
