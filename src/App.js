import "./styles.css";
import {useState} from 'react'
import Data from './MOCK_DATA.json'
import ReactPaginate from 'react-paginate'

export default function App() {
  const [users, setUsers] = useState(Data.slice(0, 50))
  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 10

  const pagesVisited = pageNumber * usersPerPage

  const displayUsers =users.slice(pagesVisited, pagesVisited + usersPerPage)
  .map(user =>{
    return(
      <div className='main-div'>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <h3>{user.email}</h3>
      </div>
    )
  })


  const pageCount = Math.ceil(users.length / usersPerPage)

  const changePage =({selected}) =>{
    setPageNumber(selected)
  }



  return (
    <div className="App">
    {displayUsers}
    <ReactPaginate
    previousLabel={'prev'}
    nextLabel={'next'}
    pageCount={pageCount}
    onPageChange={changePage}
    containerClassName={'paginationBtns'}
    previousLinkClassName={'prevBtn'}
  nextLinkClassName={'nextBtn'}
  disabledClassName={'paginationDisabled'}
  activeClassName={'paginationActive'}

    />
    </div>
  );
}
