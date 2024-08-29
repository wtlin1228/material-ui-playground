import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function LanguageSelector() {
  const [age, setAge] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 149 }}>
      <FormControl fullWidth>
        <Select
          sx={{
            backgroundColor: "white",
            height: "40px",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>繁體中文</MenuItem>
          <MenuItem value={20}>日本語</MenuItem>
          <MenuItem value={30}>English</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
