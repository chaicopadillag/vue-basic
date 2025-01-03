import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('<MyCounter />', () => {
  it('should render', () => {
    const wrapper = mount(MyCounter, {
      props: {
        initialCount: 10,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should contain title', () => {
    const initialCount = 10;
    const wrapper = mount(MyCounter, {
      props: { initialCount },
    });

    const [counter, square] = wrapper.findAll('p');

    expect(counter.text()).contain(initialCount);
    expect(square.text()).contain(initialCount * initialCount);
  });

  it('should increment count', async () => {
    const initialCount = 10;
    const wrapper = mount(MyCounter, {
      props: {
        initialCount,
      },
    });

    const button = wrapper.find('button');
    await button.trigger('click');

    const [counter, square] = wrapper.findAll('p');

    expect(counter.text()).contain(initialCount + 1);
    expect(square.text()).contain((initialCount + 1) * (initialCount + 1));
  });

  it('should decrement count tow biz', async () => {
    const initialCount = 10;
    const wrapper = mount(MyCounter, {
      props: {
        initialCount,
      },
    });

    const button = wrapper.findAll('button')[1];
    await button.trigger('click');
    await button.trigger('click');

    const [counter, square] = wrapper.findAll('p');

    expect(counter.text()).contain(initialCount - 2);
    expect(square.text()).contain((initialCount - 2) * (initialCount - 2));
  });
});
