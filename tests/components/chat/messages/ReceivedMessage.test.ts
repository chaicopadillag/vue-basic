import ReceivedMessage from '@/components/chat/messages/ReceivedMessage.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('<ReceivedMessage/>', () => {
  it('should render the component', () => {
    const message = 'No';
    const image = 'https://example.com/image.jpg';

    const wrapper = mount(ReceivedMessage, {
      props: {
        message,
        imageUrl: image,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('.capitalize').text()).toContain(message);
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
