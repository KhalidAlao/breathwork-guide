import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test('pause and resume works as expected', async () => {
  render(<App />);

  const startButton = screen.getByRole('button', { name: /begin/i });
  fireEvent.click(startButton);

  await act(() => {
    jest.advanceTimersByTime(2000); // wait 2s
  });

  const pauseButton = screen.getByRole('button', { name: /pause/i });
  fireEvent.click(pauseButton);

  const timeAtPause = screen.getByText(/\d+s/).textContent;

  await act(() => {
    jest.advanceTimersByTime(2000); // should do nothing while paused
  });

  expect(screen.getByText(timeAtPause)).toBeInTheDocument();

  const resumeButton = screen.getByRole('button', { name: /resume/i });
  fireEvent.click(resumeButton);

  await act(() => {
    jest.advanceTimersByTime(1000); // 1 second after resume
  });

  const newTime = screen.getByText(/\d+s/).textContent;
  expect(newTime).not.toBe(timeAtPause); // timer should have decreased
});
