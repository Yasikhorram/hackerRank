/*
fib(0) = 0
fib(1) = 1
fib(n) = fib(n-1) + fib(n-2)

*/
function fibonacci(n) {
  if (n < 3) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
