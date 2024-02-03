import { Helmet } from "react-helmet";
export const pageTitleName = (name) => {
  return (
    <Helmet>
      <title>{name}</title>
    </Helmet>
  );
};
