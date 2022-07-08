const refreshPage = () => {
  document.querySelector('.fa-refresh').addEventListener('click', () => {
    window.location.reload();
  });
};

export default refreshPage;