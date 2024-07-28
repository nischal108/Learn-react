import CategoryItems from "./CategoryItems";

const RestaurantCategory = ({ data, isExpanded, setIndexExpanded, index }) => {
  const handleToggle = () => {
    setIndexExpanded(isExpanded ? null : index);
  };

  return (
    <div className="my-4 p-4 border rounded-md bg-slate-100 shadow-lg cursor-pointer" onClick={handleToggle}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {data.card.card.title} ({data.card.card.itemCards.length})
        </h3>
        <span>{isExpanded ? "⬆" : "⬇"}</span>
      </div>
      {isExpanded && <CategoryItems items={data.card.card.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
