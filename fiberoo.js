function fib() {
  let list = [0, 1];

  for (let i = 2; i < 100 ; i ) {
    list.push(list[i-1] + list[i-2])
  }
  return list;
}

console.log(fib());
