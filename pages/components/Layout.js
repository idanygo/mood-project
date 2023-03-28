import Head from 'next/head';

const Layout = ({ children, backgroundColor, color }) => {
  return (<>

    <Head>
      <style>{`body{background-color: ${backgroundColor}; color: ${color}; } `}</style>
    </Head>
    {children}
  </>)
}

export default Layout;