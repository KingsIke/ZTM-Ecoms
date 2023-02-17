// import CategoryItem from "../components/category-item/category-item.component";
import CategoryItem from "../category-item/category-item.component";
import "./Directory.style.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={categories.id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  );
};

export default Directory;
