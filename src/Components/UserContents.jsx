import { useState } from "react";
import { dummyData } from "../Data";
import UserUploads from "./UserUploads";

const UserContents = () => {
  const [filteredCategory, setFilteredCategory] = useState(false);
  const [content, setContent] = useState(dummyData);
  const [categories, setCategories] = useState(
    dummyData?.filter((category) => {
      return category.category;
    })
    // This filters out the categories only from the dummy data
  );
  const filterByCategory = (category) => {
    const result = dummyData.filter((content) => {
      return content.category === category;
      // This displays the contents based on its categories
    });
    // content is set to the categories content
    setContent(result);
    // This monitors the category that is active
    setFilteredCategory(category);
  };
  // handleAll sets the content back to default when clicked showing all the contents and it set the filtered category to false
  const handleAll = () => {
    setFilteredCategory(false);
    setContent(dummyData);
  };
  return (
    <div className="userContent__container">
      <div className="content__container">
        <div className="categories__buttons">
          <div className="category__button">
            <button
              onClick={handleAll}
              // if the category buttons are not active the all button is active
              className={!filteredCategory ? "button--active" : ""}
            >
              All
            </button>
          </div>
          {categories?.map((category) => (
            <div className="category__button">
              <button
                onClick={() => filterByCategory(category.category)}
                // when any of the category button is active it activates the active state which is a change in background color
                className={
                  filteredCategory === category.category ? "button--active" : ""
                }
              >
                {category.category}
              </button>
            </div>
          ))}
        </div>
        <div className="userContent">
          {/* the contents that is being set by the category buttons */}
          {content.map((content) => (
            <>
              <h3>{content.category}</h3>
              <p>{content.content}</p>
            </>
          ))}
        </div>
      </div>
      <UserUploads />
    </div>
  );
};

export default UserContents;
