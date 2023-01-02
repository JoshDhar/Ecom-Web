import { useNavigate } from "react-router";

// import logo from "@/assets/logo.svg";
// import { Button } from '@/components/Elements';
// import { Head } from '@/components/Head';
// import { useAuth } from '@/lib/auth';

export const Home = () => {
  const navigate = useNavigate();
  //   const { user } = useAuth();

  //   const handleStart = () => {
  //     if (user) {
  //       navigate('/app');
  //     } else {
  //       navigate('/auth/login');
  //     }
  //   };

  return <div className="container mx-auto bg-gray font-txt">Hello World</div>;
};
