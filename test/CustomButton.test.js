import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../src/components/common/CustomButton';

describe('CustomButton', () => {
  it('renders CustomButton without crashing', () => {
    const { getByText } = render(
      <CustomButton onPress={() => {}} text="Click me" type="primary" />,
    );
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeDefined();
  });

  it('calls onPress function when button is clicked', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <CustomButton onPress={onPressMock} text="Click me" type="primary" />,
    );
    const buttonElement = getByText('Click me');

    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalled();
  });
});
