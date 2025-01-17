import { describe, it, expect, vi } from 'vitest';
import { flushPromises, shallowMount } from '@vue/test-utils';
import NavHeader from '../../components/NavHeader.vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

// Mock Router
const routes = [
  { path: '/', name: 'HomeView', component: { template: '<div>Home</div>' } },
  { path: '/about', name: 'AboutView', component: { template: '<div>About</div>' } },
  { path: '/contact-us', name: 'ContactView', component: { template: '<div>Contact</div>' } },
  { path: '/login', name: 'LoginView', component: { template: '<div>Login</div>' } },
  { path: '/user-information', name: 'UserInfoView', component: { template: '<div>Account</div>' } },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Mock Store
const createVuexStore = (isLoggedIn) => {
  return createStore({
    state: {
      isLoggedIn,
      urlObject: {
        userUrl: 'https://example.com/api',
      },
    },
    mutations: {
      setIsLoggedInTrue(state) {
        state.isLoggedIn = true;
      },
      setIsLoggedInFalse(state) {
        state.isLoggedIn = false;
      },
    },
  });
};

describe('NavHeader.vue', () => {
  it('renders correctly when the user is not logged in', async () => {
    const store = createVuexStore(false);
    const wrapper = shallowMount(NavHeader, {
      global: {
        plugins: [store, router],
      },
    });

    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('About Us');
    expect(wrapper.text()).toContain('Contact Us');
    expect(wrapper.text()).toContain('Log In');
    expect(wrapper.text()).not.toContain('Account');
    expect(wrapper.text()).not.toContain('Log Out');
  });

  it('renders correctly when the user is logged in', async () => {
    const store = createVuexStore(true);
    const wrapper = shallowMount(NavHeader, {
      global: {
        plugins: [store, router],
      },
    });

    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('About Us');
    expect(wrapper.text()).toContain('Contact Us');
    expect(wrapper.text()).not.toContain('Log In');
    expect(wrapper.text()).toContain('Account');
    expect(wrapper.text()).toContain('Log Out');
  });

  it('calls logoutAccount when Log Out is clicked', async () => {
    const store = createVuexStore(true);
    const wrapper = shallowMount(NavHeader, {
      global: {
        plugins: [store, router],
      },
    });

    const logoutSpy = vi.spyOn(wrapper.vm, 'logoutAccount');

    await wrapper.find('.logout-button').trigger('click');

    expect(logoutSpy).toHaveBeenCalledOnce();
  });

  it('updates isHomePage correctly on route change', async () => {
    const store = createVuexStore(false);
    router.push('/about');
    await router.isReady();

    const wrapper = shallowMount(NavHeader, {
      global: {
        plugins: [store, router],
      },
    });

    expect(wrapper.vm.isHomePage).toBe(false);

    router.push('/');
    await flushPromises();

    expect(wrapper.vm.isHomePage).toBe(true);
  });

  it('calls checkAuthStatus on mount', async () => {
    const store = createVuexStore(false);
    const checkAuthStatusSpy = vi.spyOn(NavHeader.methods, 'checkAuthStatus');

    shallowMount(NavHeader, {
      global: {
        plugins: [store, router],
      },
    });

    expect(checkAuthStatusSpy).toHaveBeenCalledOnce();
  });
});
