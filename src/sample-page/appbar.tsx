import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuItem from "@mui/material/MenuItem";

import LanguageSelector from "./language-selector";
import { Stack } from "@mui/material";

const pages = [
  "首頁",
  "營業報表",
  "帳號與權限",
  "商品/庫存管理",
  "店面管理",
  "結帳設定",
  "系統設定",
  "顧客資訊管理",
  "雲端餐廳",
  "整合功能設定",
];

export default function ResponsiveAppBar({
  handleToggleDrawer,
}: {
  handleToggleDrawer: () => void;
}) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const appbarRef = React.useRef<HTMLElement>(null);

  return (
    <Box sx={{ "--mui-shadows-4": "none" }}>
      <AppBar
        ref={appbarRef}
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            paddingInline: 3,
          }}
        >
          <Toolbar disableGutters>
            <LooseMenu
              anchorElNav={anchorElNav}
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              handleToggleDrawer={handleToggleDrawer}
            />
            <DenseMenu
              appbarRef={appbarRef}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

function DenseMenu({
  appbarRef,
  handleCloseNavMenu,
}: {
  appbarRef: React.RefObject<HTMLElement>;
  handleCloseNavMenu: () => void;
}) {
  const prevAppbarOffsetWidth = React.useRef<number>();
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [visiblePages, setVisiblePages] = React.useState(pages);
  React.useEffect(() => {
    if (!menuRef.current || !appbarRef.current) {
      return;
    }

    const menu = menuRef.current;
    const appbar = appbarRef.current;

    const adjustVisiblePages = () => {
      if (menu.offsetHeight > 22) {
        setVisiblePages(pages.slice(0, visiblePages.length - 1));
      } else if (
        menu.offsetHeight === 22 &&
        prevAppbarOffsetWidth.current &&
        prevAppbarOffsetWidth.current < appbar.offsetWidth
      ) {
        setVisiblePages(pages.slice(0, visiblePages.length + 1));
      }

      prevAppbarOffsetWidth.current = appbar.offsetWidth;
    };

    const observer = new ResizeObserver(() => {
      adjustVisiblePages();
    });
    prevAppbarOffsetWidth.current = appbar.offsetWidth;
    adjustVisiblePages();

    observer.observe(appbar);
    return () => observer.observe(appbar);
  }, [pages, visiblePages]);

  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Typography variant="h3" noWrap sx={{ mr: 4, color: "white" }}>
          iCHEF
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "end",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Stack
          ref={menuRef}
          spacing={5}
          direction="row"
          sx={{ overflowX: "clip" }}
        >
          {visiblePages.map((page) => (
            <Typography
              variant="body2"
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Typography>
          ))}
          <Typography
            variant="body2"
            key="其他"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            其他
          </Typography>
        </Stack>
        <LanguageSelector />
        <Typography variant="h5" sx={{ color: "white" }}>
          Admin(Logout)
        </Typography>
      </Box>
    </>
  );
}

function LooseMenu({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  handleToggleDrawer,
}: {
  anchorElNav: HTMLElement | null;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  handleToggleDrawer: () => void;
}) {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} direction="row" alignItems="center">
        <IconButton
          size="large"
          aria-label="drawer of current feature"
          aria-controls="menu-drawer"
          aria-haspopup="false"
          onClick={handleToggleDrawer}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h3"
          noWrap
          sx={{
            mr: 2,
            flexGrow: 1,
            color: "white",
          }}
        >
          iCHEF
        </Typography>
      </Stack>
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <SettingsIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography sx={{ textAlign: "center" }}>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </Box>
  );
}
