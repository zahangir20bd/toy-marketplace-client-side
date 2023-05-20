const ToyTable = ({ toyData }) => {
  const { toy_name, seller_name, sub_category, price, available_quantity } =
    toyData;

  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <h2>
            {seller_name ? (
              seller_name
            ) : (
              <span className="text-red-400">Seler not found</span>
            )}
          </h2>
        </td>
        <td>{toy_name}</td>
        <td>{sub_category}</td>
        <td>$ {price}</td>
        <td className="text-center">{available_quantity}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
  );
};

export default ToyTable;
