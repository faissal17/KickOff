import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import MatcheScreen from './MatcheScreen';

jest.mock('../src/service/Api.js', () => ({
  getAllMatches: jest.fn(() => Promise.resolve({ data: [] })),
  getAllLeagues: jest.fn(() => Promise.resolve({ data: [] })),
}));

// Mock the navigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({ navigate: jest.fn() })),
}));

describe('MatcheScreen component', () => {
  it('renders correctly', async () => {
    // Render the component
    const { getByText, getByTestId } = render(<MatcheScreen />);

    expect(getByText('Vs')).toBeTruthy();
    expect(getByTestId('match-item')).toBeTruthy();

    await waitFor(() =>
      expect(getByText('The UEFA Champions League')).toBeTruthy(),
    );
  });

  it('navigates to Match Details screen on item press', async () => {
    const { getByTestId } = render(<MatcheScreen />);

    fireEvent.press(getByTestId('match-item'));
  });
});
