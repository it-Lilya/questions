import { useGetSpecializationsQuery } from "../../../../entities/specialization/api/specializationApi";

import FilterBase from "../../../../shared/ui/FilterBase/FilterBase";
import Loader from "../../../../shared/ui/Loader/Loader";

type OnChangeType = (value: number) => void;;

interface SpecializationListProps {
  link: boolean;
  onChange: OnChangeType;
}

const SpecializationsList = ({ link, onChange }: SpecializationListProps) => {
   const {
    data: specializationsData,
    isLoading,
  } = useGetSpecializationsQuery({ page: 1 });

  function handle(id: number) {
    onChange(id);
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
     <FilterBase title={"Специализация"} data={specializationsData!.data} link={link} onChange={handle} />
    </>
  )
}

export default SpecializationsList;