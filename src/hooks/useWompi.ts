import { RefObject, useEffect } from 'react';

export const useWompi = (container: RefObject<HTMLElement>, amount: string) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.async = true;

    script.src = 'https://checkout.wompi.co/widget.js';

    script.dataset.render = 'button';
    script.dataset.publicKey = 'pub_prod_EjcgGnHhlLadwW52vNRlX2iGM31wRYLM';
    script.dataset.currency = 'COP';
    script.dataset.amountInCents = amount;
    script.dataset.reference = '4XMPGKWWPKWQ';
    script.dataset['signature:integrity'] =
      '37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5';

    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      if (container.current) {
        container.current!.removeChild(script);
      }
    };
  }, [container]);
};
