import { useSelector } from "react-redux";

export function useAuth() {
  const { email, login, password, confirm } = useSelector(
    (state) => state.user
  );

  return {};
}
