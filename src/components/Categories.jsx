import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Categories = ({
  anchorEl,
  open,
  handleClose,
  categories,
  handleChangeCategory,
  selectedCategory,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      menuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      className="mt-3 max-h-[400px]"
    >
      <div className="rounded bg-white w-[240px] py-1">
        {categories && categories.length > 0 ? (
          categories?.map(({ id, title }) => (
            <MenuItem
              key={id}
              onClick={() => handleChangeCategory(title)}
              className={`${
                selectedCategory === title ? '!text-black' : '!text-gray-600'
              } !text-sm !py-2 !leading-5 !font-normal`}
            >
              {title}
            </MenuItem>
          ))
        ) : (
          <p>No categories</p>
        )}
      </div>
    </Menu>
  );
};

export default Categories;
