import { useState } from "react";
import { useNavigate } from "react-router-dom";


import AccountForm from "../components/AccountForm";


export default function Account() {
  const navigate = useNavigate();
  
  return (
    <div className="page-sign-up">
      <AccountForm />
    </div>
  );
}
