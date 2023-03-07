import { AnimatePresence } from "framer-motion";
import Main from "./layout/Main";

const Layout = (): JSX.Element => {
  return (
    <AnimatePresence presenceAffectsLayout>
      <Main />
    </AnimatePresence>
  );
};

export default Layout;
