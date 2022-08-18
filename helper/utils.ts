interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const initiateLoadMore = (id: string, loadMore: Function): void => {
  document.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const orderList = document.getElementById(id);
    const offsetHeight = orderList ? orderList.offsetHeight : 0;
    const orderListBottomPosition = offsetHeight - window.innerHeight + 60;
    if (scrollHeight > orderListBottomPosition) loadMore();
  });
};

export const prepareSearchResults = (movies?: [Movie]) => {
  return movies?.map((movie?: Movie) => ({
    title: movie?.Title,
    year: movie?.Year,
    imdbID: movie?.imdbID,
    type: movie?.Type,
    poster: movie?.Poster,
  }));
};
