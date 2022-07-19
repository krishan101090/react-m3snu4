import React from 'react';

const Category = ({ categoryData }) => {
  return (
    <div>
      <div>All Menu</div>
      <table>
        <th>
          <td>Iteam Name</td>
          <td>Iteam Description</td>
        </th>

        {categoryData.map((data) => (
          <tbody key={data.name}>
            <tr>Catagory Type: {data.name}</tr>
            <tr>
              {data['menu-items'].map((menu) => (
                <tr>
                  <td>{menu.name}</td>
                  <td>{menu.description}</td>
                </tr>
              ))}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default Category;
