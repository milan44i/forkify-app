class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clear();
    return query;
  }

  #clear() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSeach(handler) {
    this.#parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
