import { createContext, useContext, type ReactNode } from "react";
import { useApi } from "../hooks/useApi";
import type { NavigationItemType } from "@/shared/components/navItems/types/NavigationItemType";
import { API_ROUTE } from "@/services/api_route";
import { ENV } from "@/config/global-config";

interface NavbarContextType {
  navItems: NavigationItemType[];
  loading: boolean;
  error: string | null;
}

const NavbarContext = createContext<NavbarContextType>({
  navItems: [],
  loading: true,
  error: null,
});

export const useNavbar = () => useContext(NavbarContext);

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const { data, loading, error } = useApi<NavigationItemType[]>(
    `${ENV.API_FULL_URL}${API_ROUTE.navigationMenu.list}`,
  );

  const navItems: NavigationItemType[] = data ?? [];
  return (
    <NavbarContext.Provider value={{ navItems, loading, error }}>
      {children}
    </NavbarContext.Provider>
  );
};
