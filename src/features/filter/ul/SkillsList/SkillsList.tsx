import { useGetSkillsListQuery } from "../../../../entities/skill/api/skillApi";

import FilterBase from "../../../../shared/ui/FilterBase/FilterBase";
import Loader from "../../../../shared/ui/Loader/Loader";

interface SkillsListProps {
  link: boolean;
  onChange: (id: number) => void;
}

const SkillsList = ({ link, onChange }: SkillsListProps) => {
  const {data, isLoading} = useGetSkillsListQuery({ page: 1 });

  if (isLoading) {
    return <Loader />;
  }

 function handle(id: number) {
    onChange(id);
  }
  
  return (
    <>
      <FilterBase title={"Навыки"} data={data!.data} link={link} onChange={handle} iconShow={true} />
    </>
  )
};

export default SkillsList;