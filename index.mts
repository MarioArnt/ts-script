const greet = async () => new Promise<void>((resolve) => setTimeout(() => {
  console.info('Hello from asynchronous world');
  resolve();
}, 200));

await greet();
