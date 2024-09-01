// import { EditFilled } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function EditButton() {
  return (
    <Button
      startIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.49902 14.376V17.501H5.62402L14.8407 8.28432L11.7157 5.15932L2.49902 14.376ZM17.2574 5.86765C17.5824 5.54265 17.5824 5.01765 17.2574 4.69265L15.3074 2.74265C14.9824 2.41765 14.4574 2.41765 14.1324 2.74265L12.6074 4.26765L15.7324 7.39265L17.2574 5.86765Z"
            fill="#0099B5"
          />
        </svg>
      }
      variant="text"
      color="primary"
      size="medium"
      sx={{ fontSize: "16px" }}
    >
      編輯
    </Button>
  );
}
