'use client'

function Error({ statusCode }: { statusCode: number }) {
  return (
    <div>
      <h1>Error</h1>
      <p>An error {statusCode} occurred on server</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: { res: any, err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
