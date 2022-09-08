// esm.sh is used to compile stripe-node to be compatible with ES modules.
import StripeNode from 'npm:stripe@10.8.0';
import type {StripeConfig, CryptoProvider} from 'npm:stripe@10.8.0';

export * from 'npm:stripe@10.8.0';

// This is needed to use the Fetch API rather than relying on the Node http package.
const defaultHttpClient = StripeNode.createFetchHttpClient();

// This is needed in order to use the Web Crypto API in Deno.
const defaultCryptoProvider = StripeNode.createSubtleCryptoProvider();

export function Stripe(key: string, config: StripeConfig = {}) {
  const stripe = StripeNode(key, {
    ...config,
    httpClient: config.httpClient || defaultHttpClient,
  });

  if (!stripe) {
    throw new Error('Failed to create Stripe instance');
  }

  const constructEventAsync = stripe.webhooks.constructEventAsync;
  stripe.webhooks.constructEventAsync = (
    payload: string,
    header: string,
    secret: string,
    tolerance?: number,
    cryptoProvider?: CryptoProvider
  ) =>
    constructEventAsync(
      payload,
      header,
      secret,
      tolerance,
      cryptoProvider || defaultCryptoProvider
    );

  return stripe;
}

export default Stripe;
