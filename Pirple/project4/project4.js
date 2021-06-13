findSquare = (num) => {
  let x = parseInt(num);
  
  if(!isNaN(x)) {
      return Math.pow(x, 2);
  } else throw "Not a valid number.";
};

exports.squarer = (req, res) => {
  let num = req.query.number;
  let result;

  try {
      let squareNum = findSquare(num);
      result = `Square of ${num} is ${squareNum}`;
  } catch (e) {
      result = e;    
  }

  res.status(200).send(result);
};