// AlertProvider.js
import { useState, useCallback, useEffect } from "react";
import { Snackbar, Alert as MuiAlert } from "@mui/material";
import { setAlertHandler } from "./AlertService";

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertState, setAlertState] = useState<{
    open: boolean;
    message: string;
    title: string;
    severity: "info" | "warning" | "error" | "success";
  }>({
    open: false,
    message: "",
    title: "",
    severity: "info",
  });

  const alert = useCallback(
    (
      message: string,
      title = "",
      severity: "info" | "warning" | "error" | "success" = "info"
    ) => {
      setAlertState({ open: true, message, title, severity });
    },
    []
  );

  useEffect(() => {
    setAlertHandler(alert); // Gán hàm alert toàn cục
  }, [alert]);

  const handleClose = () => {
    setAlertState((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      {children}
      <Snackbar
        open={alertState.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        
      >
        <MuiAlert
          onClose={handleClose}
          severity={alertState.severity}
          sx={{ width: "100%" }}
        >
          {alertState.title && <strong>{alertState.title} — </strong>}
          {alertState.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};
