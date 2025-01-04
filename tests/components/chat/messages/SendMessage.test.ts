import SendMessage from '@/components/chat/messages/SendMessage.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('<SendMessage/>', () => {
  it('should render the component', () => {
    const message = 'Hello love!';

    const wrapper = mount(SendMessage, {
      props: {
        message,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
  });
});
