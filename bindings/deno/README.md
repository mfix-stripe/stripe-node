# Stripe Deno bindings

The Stripe Deno bindings provides access to the Stripe API from applications written in [Deno](https://deno.land).
It wraps our [`stripe-node`](https://github.com/stripe/stripe-node) SDK to provide native Deno support.

## Usage

> **Note**: requires Deno v1.25.1 or greater.

```js
// main.ts
import Stripe from 'deno.land/x/stripe';

const stripe = Stripe('sk_test_...');
```

then run the Deno CLI:

```sh
deno run --allow-net --allow-env --check main.ts
```

## Documentation

See the [`stripe-node` API docs](https://stripe.com/docs/api?lang=node).

See [this video demonstration](https://www.youtube.com/watch?v=epCHqHEdz8I) covering how to use the library.

## License

MIT
