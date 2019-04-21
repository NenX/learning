function add(x, y) {
  const resArr = [];
  let carryBit = 0,
    xArr = x.split(''),
    yArr = y.split(''),
    rightOfX = xArr.pop(),
    rightOfY = yArr.pop();

  while (rightOfX !== undefined || rightOfY !== undefined) {
    rightOfX = +rightOfX || 0;
    rightOfY = +rightOfY || 0;
    const sumBitArr = (carryBit + rightOfX + rightOfY + '').split('');

    resArr.push(+sumBitArr.pop());
    carryBit = +sumBitArr.pop() || 0;
    rightOfX = xArr.pop();
    rightOfY = yArr.pop();
  }
  if (carryBit) { resArr.push(carryBit) }
  const res = resArr.reverse().join('')
  console.log(res)
}
add('1119', '118881')