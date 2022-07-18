import React from 'react';
import { Text, View, Flatlist, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const listOfExercises = [
  'Mini-Hops ',
  'Plate Hops ',
  'Tuck Jumps ',
  'Lateral Hops ',
  'Shoulder Taps ',
  'Side Plank ',
  'Plank Walk-Ups ',
  'Chaturanga Planks ',
  'Bird Dogs ',
  'Figure 8 Planks ',
  'Inchworms',
  'Mountain Climbers ',
  'Dragon Walk',
  'Hand-Release',
  'Decline Push Ups ',
  'Bird Dog Push Ups ',
  'Weighted Push Ups ',
  'Ring Push Ups ',
  'Push Up To Dip ',
  'Forward Ball Slams ',
  'Lateral Ball Slams ',
  'Superman Hold',
  'Dead Bugs ',
  'Hollow Hold ',
  'Hollow Rocks ',
  'Pole V-Ups',
  'Pole Scissors ',
  'Wolf Raise ',
  'Russian Twists ',
  'Russian Taps \xa0',
  'Half-Get Ups ',
  'V-Ups ',
  'Step Ups ',
  'Squat Jumps ',
  'Jumping Lunges ',
  'Pistol Squats ',
  'Depth Jumps ',
  'Ball Toss Crunch ',
  'Nordic Ball Toss ',
  'Goblet Squats ',
  'Goblet Step Ups ',
  'Figure-8 Swings ',
  'Turkish Get-Ups ',
  'Windmills ',
  'Farmers Carry ',
  'Farmers Lunges ',
  'Halos ',
  'KB or DB Deadlifts ',
  'KB or DB Thrusters ',
  'Devil Presses ',
  'Man Makers ',
  'Yoke Carries ',
  'Sled Drag ',
  'Prowler Push ',
  'Axle Bar Cleans ',
  'Strict Toes to Bar ',
  'Skin the Cat ',
  'L-Sits ',
  'Pike Leg Lifts ',
  'Seal Walks ',
  'Box Squats ',
  'Clusters ',
  'Sots Press ',
  'Duck Walks ',
  'Snatch Balance ',
  'Sumo Deadlifts ',
  'Good Mornings',
  'Front Rack Lunges ',
  'Romanian Deadlifts ',
];

const ExercisesButton = (exercisesList) => {
  return (
    <List.AccordionGroup>
      <List.Accordion title='Testing' id='1'>
        <List.Item title='Plank'></List.Item>
      </List.Accordion>
    </List.AccordionGroup>
  );
};

export default ExercisesButton;
