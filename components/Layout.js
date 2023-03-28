import Head from "next/head";

const Layout = ({
  children,
  backgroundColor = "#faedcd",
  color = "#000000",
}) => {
  return (
    <>
      <Head>
        <style>{`body{background-color: ${backgroundColor}; color: ${color}; } `}</style>
      </Head>
      {children}
    </>
  );
};

export default Layout;
