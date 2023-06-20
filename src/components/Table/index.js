import {Table as BootstrapTable} from 'react-bootstrap'

const Table = ({columns, dataSource}) => {
    return <BootstrapTable className='striped bordered hover'>
    <thead className='border-0'>
      <tr>
        {columns?.map(col => <th key={col.dataIndex}>{col.title}</th>)}
      </tr>
    </thead>
    <tbody>
      {dataSource?.map(data => {
        return <tr key={data?.key} className='border border-dark-subtle'>
            {columns.map(({dataIndex, render}) => {
                if(render){
                    return <td key={dataIndex}>{render(data[dataIndex])}</td>
                }else {
                    return <td key={dataIndex}>{data[dataIndex]}</td>
                }
            })}
        </tr> 
      })}
    </tbody>
  </BootstrapTable>
}

export default Table