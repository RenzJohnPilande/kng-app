import { Label } from "@/components/ui/label";

export const FilterBox = ({ filters, selectedFilters, setSelectedFilters }) => {
  // Handle the checkbox change event to update the selectedFilters array
  const handleCheckboxChange = (e, filterName) => {
    if (e.target.checked) {
      // Add filter to selectedFilters if it's checked
      setSelectedFilters((prevFilters) => [...prevFilters, filterName]);
    } else {
      // Remove filter from selectedFilters if it's unchecked
      setSelectedFilters((prevFilters) => prevFilters.filter((filter) => filter !== filterName));
    }
  };

  return (
    <div className="flex justify-start gap-6 w-full px-1">
      {filters.map((filterItem) => (
        <div className="flex items-center gap-2" key={filterItem.name}>
          <input
            type="checkbox"
            id={filterItem.name}
            className="flex border-zinc-300 w-3 h-3 justify-center items-center"
            checked={selectedFilters.includes(filterItem.name)} // Check if filter is in the selectedFilters array
            onChange={(e) => handleCheckboxChange(e, filterItem.name)} // Handle change
          />
          <Label htmlFor={filterItem.name} className="capitalize text-sm">
            {filterItem.name}
          </Label>
        </div>
      ))}
    </div>
  );
};
