import Link from "next/link";
import React from "react";


const Error404 = () => {
  return (
    <div>
        😒 404 - This page not found.
        <br/>
        <br/>
        <Link href={'/'}>
            ← Back Home
        </Link>
    </div>
  );
};

export default Error404;
