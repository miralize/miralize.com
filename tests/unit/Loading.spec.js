import { mount } from '@vue/test-utils';
import Loading from '/@/components/Loading.vue';

describe('Loading.vue', () => {
  it('renders the loading class when passed true & removes the class when passed false', async () => {
    const LoadingComponent = mount(Loading, {
      props: {
        loading: false
      },
    });
    expect(LoadingComponent.classes()).not.toContain('loading-indicator--is-loading');
    await LoadingComponent.setProps({ loading: true })
    expect(LoadingComponent.classes()).toContain('loading-indicator--is-loading');
    await LoadingComponent.setProps({ loading: false })
    expect(LoadingComponent.classes()).not.toContain('loading-indicator--is-loading');
  });
});
