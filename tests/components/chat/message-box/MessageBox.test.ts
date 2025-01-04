import MessageBox from '@/components/chat/message-box/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('<MessageBox/>', () => {
  it('should render correctly', () => {
    const wrapper = mount(MessageBox);

    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  it('should emit an event when the button is clicked', async () => {
    const message = 'Hello';
    const wrapper = mount(MessageBox);

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('onMessage')).toBeTruthy();
    expect(wrapper.emitted('onMessage')?.[0]).toEqual([message]);
    expect(wrapper.find('input[type="text"]').element.value).toBe('');
  });

  it('should emit an event when the enter key is pressed', async () => {
    const message = 'Hello world';
    const wrapper = mount(MessageBox);

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('input[type="text"]').trigger('keyup.enter');

    expect(wrapper.emitted('onMessage')).toBeTruthy();
    expect(wrapper.emitted('onMessage')?.[0]).toEqual([message]);
    expect(wrapper.find('input[type="text"]').element.value).toBe('');
  });
});
