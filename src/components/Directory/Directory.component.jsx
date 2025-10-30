// import CategoryItem from "../components/category-item/category-item.component";
import DirectoryItem from "../Directory-item/Directory-item.component.jsx";
import "./Directory.style.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
