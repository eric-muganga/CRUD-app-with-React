import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">
          CRUD with redux toolKit
        </h1>
        <Outlet />
      </div>
    </>
  );
}
