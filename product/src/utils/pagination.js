function paginationFun(data) {
  return (req, res, next) => {
    let page = parseInt(req.query.page); // 1 // page 1 => 1d,2d,3d ; page 2 =>4d,5d,6d
    let limit = parseInt(req.query.limit); // 3
    // page = page < 1 ? 1 : page;
    // limit = limit < 1 ? 3 : limit;
    const startIndex = (page - 1) * limit;
    const endIndex = limit * page;
    // arr[i=0]<3 // arr[i=3]< 6 // arr[i=6]<9 // arr[i=9]<12

    const result = {};

    if (startIndex > 0) {
      result.previous = { previous: page - 1, limit: limit };
    }
    if (endIndex < data.length) {
      result.next = { Next: page + 1, limit: limit };
    }

    result.result = data.slice(startIndex, endIndex);

    res.paginationFun = result;
    next();
  };
}

module.exports = paginationFun;
