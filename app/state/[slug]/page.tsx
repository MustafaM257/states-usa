import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="space-y-10 mt-52">
      <p className="text-5xl text-center">This is the {params.slug} page</p>
    </div>
  );
};

export default page;
