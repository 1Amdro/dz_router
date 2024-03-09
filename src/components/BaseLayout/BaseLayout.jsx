import { Outlet, useNavigation } from "react-router-dom";
import TheHeader from "../TheHeader/TheHeader";
import BaseLoader from "../BaseLoader/BaseLoader";

function BaseLayout() {
  const navigation = useNavigation();

  return (
    <>
      <TheHeader />
      {navigation.state === "loading" ? <BaseLoader /> : <Outlet />}
    </>
  );
}

export default BaseLayout;
