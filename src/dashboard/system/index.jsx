import { Outlet } from "react-router-dom";

export default function Index() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/dashboard/system-setup/buses");
  // }, [navigate]); 

  return (
    <main>
      <Outlet />
    </main>
  );
}