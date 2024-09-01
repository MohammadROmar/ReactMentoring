import { Link, useRouteError } from "react-router-dom";

import Header from "../Header/Header.tsx";
import ErrorIcon from "../../assets/icons/Error.tsx";

import "./ErrorElement.css";
import Error404Icon from "../../assets/icons/Error404.tsx";

type Error = {
  status: number;
  statusText: string;
  data: string;
};

export default function ErrorElement() {
  const error = useRouteError() as Error;
  console.log(error);

  let Icon = ErrorIcon;
  let message = "Looks like something went wrong";

  if (error.status === 404) {
    Icon = Error404Icon;
    message = "Page Not Found";
  }

  return (
    <>
      <Header />
      <div className="error-element">
        <div className="error-element__icon-wrapper">
          <Icon />
        </div>
        <h2 className="error-element__title">{message}</h2>
        <Link to="/" className="error-element__navigation">
          Back to Home
        </Link>
      </div>
    </>
  );
}
