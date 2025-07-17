import HeaderBox from "@/components/HeaderBox";
import React from "react";

const page = () => {
  const loggedIn = {firstName:"Abhishek"}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage you account and transaction efficiently."
          />
        </header>
      </div>
    </section>
  );
};

export default page;
