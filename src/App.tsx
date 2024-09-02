import { Box, Divider, Stack, Toolbar, Typography } from "@mui/material";
import ResponsiveAppBar from "./sample-page/appbar";
import ClippedDrawer from "./sample-page/drawer";
import BreadcrumbsWithNextIcon from "./sample-page/breadcrumbs";
import BasicTabs from "./sample-page/tabs";
import HelpButton from "./sample-page/help-button";
import * as React from "react";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  return (
    <Box sx={{ display: "flex" }}>
      <ResponsiveAppBar
        handleToggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <ClippedDrawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={() => setIsDrawerOpen(false)}
      />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <BreadcrumbsWithNextIcon />
        <Divider />
        <Box
          sx={{
            px: {
              xs: 2,
              sm: 4,
              md: 6,
              lg: 8,
              xl: "122px",
            },
            py: 6,
          }}
        >
          <Stack spacing={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h2">訂位規則</Typography>
              <HelpButton />
            </Box>
            <BasicTabs />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
