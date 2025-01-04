import MessageBox from '@/components/chat/message-box/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('<IndecisionView />', () => {
  it('should render the component', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: { template: `<div>Mock ChatMessages</div>` },
        },
      },
    });

    const messageBoxComponent = wrapper.findComponent(MessageBox);

    messageBoxComponent.vm.$emit('onMessage', 'Hello');

    await new Promise((resolve) => setTimeout(resolve, 200));

    expect(messageBoxComponent.emitted('onMessage')).toBeTruthy();
  });
});
