import { useEffect, useState } from "react";
import { actions } from "astro:actions";

interface TestProps {
  uid: string;
}

export const Test: React.FC<TestProps> = ({ uid }) => {
    const [loading, setLoading] = useState(true);  
    const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await actions.getAllByUidAction({ uid });
      const status = response?.data?.status;
      const data = response?.data?.body?.data;

      if (status === 200) {
        setUserData(!!data ? data : {});
        setLoading(false);
      }

      if (status === 500) {
        console.error(status);
      }
    };

    fetchData();
  }, [uid]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>{JSON.stringify(userData)}</h1>
      )}
    </div>
  );
};
