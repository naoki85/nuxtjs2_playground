import { mount } from '@vue/test-utils'
import Paginate from '@/components/paginate.vue'

describe('Paginate', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Paginate)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})