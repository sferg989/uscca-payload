import * as React from 'react';
import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import AfterDashboard from './index';

describe('After Dashboard ', () => {
  it('should render', async () => {
    await act(async () => {
      const component = await mount(<AfterDashboard />);

      expect(component.html()).toContain('<h4>Join our Discord</h4>');
    });
  });
});
