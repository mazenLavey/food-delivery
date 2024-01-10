
const CategoryBtn = ({ name, ChangeCategory, menuFilter }) => {
    return (
        <span className={menuFilter === name ? 'active' : null} data-category={name} onClick={ChangeCategory}>{name}</span>
        // <span data-category={name} onClick={ChangeCategory}>{name}</span>
    );
};

export default CategoryBtn;