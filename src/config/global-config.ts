export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  API_VERSION: import.meta.env.VITE_API_VERSION,
  API_FULL_URL:
    import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_API_VERSION,
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
};
