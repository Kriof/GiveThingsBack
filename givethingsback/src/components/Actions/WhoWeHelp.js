import C from '../Reducers/constants'
export const FETCHING = "Fetching fundations";
export const FETCHED = "Fetched data";

export const contactsFetched = (contacts) => ({
    type: 'FETCH_CONTACTS_SUCCESS',
    contacts
  });

  const startFetching = () => ({
    type: FETCHING
  })

  const fetched = (data) => ({
    type: FETCHED,
    data
  });

  export const changePage = (pageId) => ({
    type: C.CHANGE_PAGE,
    pageId
  });


  export const fetchFundation = name => dispatch => {
//function carling 
dispatch(startFetching())
fetch('http://localhost:3002/foundations')
    .then(res => res.json())
    .then(data => dispatch(fetched(data)))
  }