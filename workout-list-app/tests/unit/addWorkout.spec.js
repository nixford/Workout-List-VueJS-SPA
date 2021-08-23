import { mount } from '@vue/test-utils';
// import { shallowMount } from '@vue/test-utils';
import AddWorkout from '../../src/views/workout/AddWorkout.vue';

describe('AddWorkout.vue', () => {

  test('initial length is zero', () => {    
    // Arrange
    const wrapper = mount(AddWorkout); 

    // Act
    expect(wrapper.vm.$data.exercises.length).toBe(0);
  })


  test('exercise is added to array when add button is clicked', () => {    
    // Arrange
    const wrapper = mount(AddWorkout); 
    const button = wrapper.find('button');

    // Act
    button.trigger('click');

    // Assert
    expect(wrapper.vm.$data.exercises.length).toBe(1);
  })

  test('exercise is listed on the page when add button is clicked', async () => {  
    // Arrange  
    const wrapper = mount(AddWorkout); 
    const button = wrapper.find('button');

    // Act
    await button.trigger('click');

    // Assert
    expect(wrapper.find('p').text()).toContain("1.");
  }) 
})
