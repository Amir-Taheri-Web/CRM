import HomePage from "@/components/templates/HomePage";
import api from "@/configs/api";
import useSWR from "swr";

const Home = () => {
  const fetcher = async (url) => await api.get(url);

  const { data, error, isLoading } = useSWR("/api/customers", fetcher);

  return (
    <HomePage customers={data?.data} error={error} isLoading={isLoading} />
  );
};

export default Home;
