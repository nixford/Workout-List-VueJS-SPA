import { shallowMount } from '@vue/test-utils';
import AddWorkout from '../../src/views/workout/AddWorkout.vue';

describe('AddWorkout.vue', () => {

  const wrapper = shallowMount(AddWorkout); 

  test('initial length is zero', () => { 
    // Act
    expect(wrapper.vm.$data.exercises.length).toBe(0);
  })

  test('exercise is added to array when add button is clicked', () => {    
    // Arrange
    const button = wrapper.find('button');

    // Act
    button.trigger('click');

    // Assert
    expect(wrapper.vm.$data.exercises.length).toBe(1);
  })

  test('exercise is listed on the page when add button is clicked', async () => {  
    // Arrange  
    const button = wrapper.find('button');

    // Act
    await button.trigger('click');

    // Assert
    expect(wrapper.find('p').text()).toContain("1.");
  })

  test('snapshot renders correctly', () => {  
    expect(wrapper.element).toMatchSnapshot();
  })
  
  test('snapshot contains h1 tag', () => {    
    expect('<h1>Workout List App</h1>').toMatchSnapshot();
  })
})
