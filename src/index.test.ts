import { createDebouncer } from './index';

describe('createDebouncer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should resolve to true when debounce completes', async () => {
    const debounce = createDebouncer(100);
    const promise = debounce();

    jest.advanceTimersByTime(100);

    const result = await promise;
    expect(result).toBe(true);
  });

  it('should resolve to false when debounce is cancelled by a new call', async () => {
    const debounce = createDebouncer(100);

    const firstCall = debounce();
    const secondCall = debounce();

    const firstResult = await firstCall;
    expect(firstResult).toBe(false);

    jest.advanceTimersByTime(100);
    const secondResult = await secondCall;
    expect(secondResult).toBe(true);
  });

  it('should handle multiple rapid calls correctly', async () => {
    const debounce = createDebouncer(100);

    const call1 = debounce();
    const call2 = debounce();
    const call3 = debounce();

    expect(await call1).toBe(false);
    expect(await call2).toBe(false);

    jest.advanceTimersByTime(100);
    expect(await call3).toBe(true);
  });
});

