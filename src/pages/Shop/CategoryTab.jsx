import CategoryCard from "./CategoryCard";


const CategoryTab = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 mt-10 md:mt-16 mb-12 md:mb-32 w-5/6 mx-auto md:w-full">
                {items.map((perfume) =>
                    <CategoryCard key={perfume.id} item={perfume} />
                )}
            </div>
        </div>
    );
};

export default CategoryTab;