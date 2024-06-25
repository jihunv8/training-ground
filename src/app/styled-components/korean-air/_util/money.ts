export function parseMoney(num) {
  let money = String(num);

  for (let i = money.length - 3; i > 0; i -= 3) {
    money = money.slice(0, i) + ',' + money.slice(i, money.length);
  }

  return money;
}
