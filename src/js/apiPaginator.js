export default class ApiPaginator {
  constructor({ currentPage, prelink, totalPages, templateTmp, perPage }) {
    this.current = currentPage;
    this.prelink = prelink;
    this.totalPage = totalPages;
    this.template = templateTmp;
    this.perPage = perPage;

    this.first = currentPage > 1 ? 1 : 0;
  }

  render() {
    this.previous = this.current - 1;
    this.next = this.current + 1;
    this.range = this.getRange();

    return this.template(this);
  }

  getRange() {
    const totalPage = Math.ceil(this.totalPage / this.perPage);
    // console.log(this);
    if (this.current > totalPage) {
      return [{ num: 1, active: true }];
    }

    this.last = totalPage;

    if (this.current < 5 && totalPage < 5) {
      //less than 5 page

      let arr = [];
      for (let i = 0; i < totalPage; i++) {
        arr.push({
          num: i + 1,
          active: i + 1 === this.current ? true : false,
        });
      }
      return arr;
    }

    let left = 2;
    let right = 2;
    let rangeTemp = [];

    if (this.current === totalPage) {
      left = 4;
      for (let i = 0; i <= left; i++) {
        rangeTemp.push({
          num: this.current - i,
          active: i === 0 ? true : false,
        });
      }
    } else if (totalPage - this.current === 1) {
      left = 3;
      right = 1;
      rangeTemp.push({ num: totalPage, active: false });

      for (let i = 0; i <= left; i++) {
        rangeTemp.push({
          num: this.current - i,
          active: i === 0 ? true : false,
        });
      }
    } else if (this.current === 2) {
      rangeTemp.push({ num: this.current + 3, active: false });
      rangeTemp.push({ num: this.current + 2, active: false });
      rangeTemp.push({ num: this.current + 1, active: false });
      rangeTemp.push({ num: this.current, active: true });
      rangeTemp.push({ num: this.current - 1, active: false });
    } else if (totalPage - this.current >= 2 && this.current != 1) {
      rangeTemp.push({ num: this.current + 2, active: false });
      rangeTemp.push({ num: this.current + 1, active: false });
      rangeTemp.push({ num: this.current, active: true });
      rangeTemp.push({ num: this.current - 1, active: false });
      rangeTemp.push({ num: this.current - 2, active: false });
    } else {
      rangeTemp.push({ num: this.current + 4, active: false });
      rangeTemp.push({ num: this.current + 3, active: false });
      rangeTemp.push({ num: this.current + 2, active: false });
      rangeTemp.push({ num: this.current + 1, active: false });
      rangeTemp.push({ num: this.current, active: true });
    }

    return rangeTemp.reverse();
  }
}
