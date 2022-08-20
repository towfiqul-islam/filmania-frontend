
export const initiateLoadMore = (id: string, loadMore: Function): void => {
  document.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const orderList = document.getElementById(id);
    const offsetHeight = orderList ? orderList.offsetHeight : 0;
    const orderListBottomPosition = offsetHeight - window.innerHeight + 60;
    if (scrollHeight > orderListBottomPosition) loadMore();
  });
};

