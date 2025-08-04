import { JSX, useEffect } from "react";
import { useLocation } from "react-router";

const PageTitle = ({title, element}: {title: string, element: JSX.Element} ) => {
    const location = useLocation();

    useEffect(()=>{
        document.title = title;
    }, [title, location]);
  return (
    <>
      {element ? element : <h1 className="text-2xl font-bold">{title} "have no element"</h1>}
    </>
  )
}

export default PageTitle;