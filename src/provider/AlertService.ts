// AlertService.js
interface AlertHandler {
    (msg: string, title: string, severity: 'info' | 'warning' | 'error' | 'success'): void;
}

let alertHandler: AlertHandler | null = null;

export const setAlertHandler = (fn: AlertHandler) => {
  alertHandler = fn;
};

export const alert = (msg: string, title = '', severity: 'info' | 'warning' | 'error' | 'success' = 'info') => {
  if (alertHandler) {
    alertHandler(msg, title, severity);
  } else {
    console.warn('Alert handler not set yet!');
  }
};
