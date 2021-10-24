import React,{Component} from 'react';

class Table extends Component {
  render() {
    const {tableData, tableFunction} = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody tableData={tableData} tableFunction={tableFunction} />
      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  const {tableData, tableFunction} = props;
  const rowElements = tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>
          <button onClick={() => tableFunction(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rowElements}</tbody>
}

export default Table;