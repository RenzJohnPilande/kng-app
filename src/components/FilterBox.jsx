import { Label } from "@/components/ui/label";

export const FilterBox = ({ filters, selectedFilters, setSelectedFilters }) => {
  const handleCheckboxChange = (e, filterName) => {
    if (e.target.checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, filterName]);
    } else {
      setSelectedFilters((prevFilters) => prevFilters.filter((filter) => filter !== filterName));
    }
  };

  return (
    <div className="flex flex-wrap justify-start gap-4 w-full px-1 my-4">
      {filters.map((filterItem) => {
        const sanitizedId = filterItem.type.replace(/[^a-z0-9]/gi, "-");

        return (
          <div className="flex items-center gap-2" key={filterItem.type}>
            <input
              type="checkbox"
              id={sanitizedId}
              className="flex border-zinc-300 w-3 h-3 justify-center items-center"
              checked={selectedFilters.includes(filterItem.type)}
              onChange={(e) => handleCheckboxChange(e, filterItem.type)}
            />
            <Label htmlFor={sanitizedId} className="capitalize text-sm">
              {filterItem.name || filterItem.type}
            </Label>
          </div>
        );
      })}
    </div>
  );
};
