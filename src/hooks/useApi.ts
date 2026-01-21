import { useState, useEffect } from "react";
import axios, { type AxiosRequestConfig } from "axios";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  errors: any | null;
  meta: any | null;
}

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T = any>(
  endpoint: string,
  config?: AxiosRequestConfig,
): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<ApiResponse<T>>(endpoint, config);

        if (!isMounted) return;

        if (response.data.success) {
          setData(response.data.data);
          setError(null);
        } else {
          setError(response.data.message || "API returned an error");
          setData(null);
        }
      } catch (err: any) {
        if (!isMounted) return;
        setError(err.response?.data?.message || err.message || "Network Error");
        setData(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, loading, error };
}
