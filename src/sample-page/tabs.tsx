import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FormSectionGroup, { FormSection } from "./form-section";
import { Stack, Typography } from "@mui/material";
import { palette } from "../theme";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3, display: "flex", flexDirection: "column", gap: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="基本設定" {...a11yProps(0)} />
          <Tab label="特殊時間設定" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FormSectionGroup title="時間設定">
          <FormSection title="用餐限時" hasTooltip>
            <Typography variant="body1">120分鐘</Typography>
          </FormSection>
          <FormSection title="座位保留時間" hasTooltip>
            <Typography variant="body1">10分鐘</Typography>
          </FormSection>
          <FormSection title="可預約用餐時段">
            <Stack spacing={2}>
              <Stack spacing={5} direction={"row"}>
                <Typography variant="body1" sx={{ width: "80px" }}>
                  星期一
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body1">
                    10:00 ~ 13:00（間隔 60 分鐘）
                  </Typography>
                  <Typography variant="body1">
                    14:00 ~ 19:00（間隔 60 分鐘）
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={5} direction={"row"}>
                <Typography variant="body1" sx={{ width: "80px" }}>
                  星期二
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body1">不提供訂位</Typography>
                </Stack>
              </Stack>
              <Stack spacing={5} direction={"row"}>
                <Typography variant="body1" sx={{ width: "80px" }}>
                  星期三
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body1">
                    10:00 ~ 13:00（間隔 60 分鐘）
                  </Typography>
                  <Typography variant="body1">
                    14:00 ~ 19:00（間隔 60 分鐘）
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={5} direction={"row"}>
                <Typography variant="body1" sx={{ width: "80px" }}>
                  星期四
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body1">
                    10:00 ~ 13:00（間隔 60 分鐘）
                  </Typography>
                  <Typography variant="body1">
                    14:00 ~ 19:00（間隔 60 分鐘）
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={5} direction={"row"}>
                <Typography variant="body1" sx={{ width: "80px" }}>
                  星期五
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body1">
                    10:00 ~ 13:00（間隔 60 分鐘）
                  </Typography>
                  <Typography variant="body1">
                    14:00 ~ 19:00（間隔 60 分鐘）
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={5} direction={"row"}>
                <Typography variant="body1" sx={{ width: "80px" }}>
                  星期六
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body1">不提供訂位</Typography>
                </Stack>
              </Stack>
              <Stack spacing={5} direction={"row"}>
                <Typography variant="body1" sx={{ width: "80px" }}>
                  星期日
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body1">不提供訂位</Typography>
                </Stack>
              </Stack>
            </Stack>
          </FormSection>
        </FormSectionGroup>

        <FormSectionGroup title="開放訂位區間">
          <FormSection title="開放訂位區間" hasTooltip>
            <Typography variant="body1">
              開放 1 天後，至 30 天內的訂位。
            </Typography>
          </FormSection>
        </FormSectionGroup>

        <FormSectionGroup title="訂位進階設定">
          <FormSection title="訂位備註設定" hasTooltip>
            <Typography variant="body1">顯示備註欄位，消費者選填</Typography>
          </FormSection>
          <FormSection title="備註欄位提示" hasTooltip>
            <Typography variant="body1" sx={{ color: palette.text.disabled }}>
              選填
            </Typography>
          </FormSection>
        </FormSectionGroup>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        特殊時間設定
      </CustomTabPanel>
    </Box>
  );
}
