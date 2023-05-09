import { render, screen } from '@/tests/test-utils';

import { MainProvider } from '.';

describe('MainProvider', () => {
  it('should render the children components1', () => {
    render(
      <MainProvider pageProps={{}}>
        <h1>MainLayout children</h1>
      </MainProvider>
    );

    // Assert
    screen.getByRole('heading', { name: /MainLayout children/i });
  });
});
