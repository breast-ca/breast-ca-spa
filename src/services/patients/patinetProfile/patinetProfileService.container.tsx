import { useParams } from "react-router-dom";

export const PatinetProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  return <>пациент {id}</>;
};
