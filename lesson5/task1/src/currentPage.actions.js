export const SET_CURRENT_PAGE = 'CURRENT_PAGE/SET_CURRENT_PAGE';

export const setCurrentPage = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    payload: {
      currentPage
    }
  }
}