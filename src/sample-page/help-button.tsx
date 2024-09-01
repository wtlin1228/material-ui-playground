import { InfoOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function HelpButton() {
  return (
    <Button
      startIcon={<InfoOutlined />}
      variant="text"
      color="primary"
      size="medium"
      sx={{ fontSize: "16px" }}
    >
      取得協助
    </Button>
  );
}
