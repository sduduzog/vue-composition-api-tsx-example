import { shallowMount, createLocalVue } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld";
import VueCompositionApi from "@vue/composition-api";
describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const localVue = createLocalVue();
    localVue.use(VueCompositionApi);
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      localVue
    });
    expect(wrapper.isVueInstance()).toBe(true);
    expect(wrapper.vm.$el.textContent).toMatch(msg);
  });
});
