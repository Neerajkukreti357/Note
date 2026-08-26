import { FlatList, Text, View } from 'react-native';
import styles from './style';
import { badgeColors } from '@/theme/colors';
import { Priority } from '../badges/types';

type Task = {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: Priority;
};

const tasks: Task[] = [
  {
    id: '1',
    date: '2026-08-26',
    title: 'Complete project documentation',
    description: 'Finish the documentation for the project',
    priority: 'high',
  },
  {
    id: '2',
    date: '2026-08-26',
    title: 'Review API integration',
    description: 'Check API implementation and error handling',
    priority: 'medium',
  },
  {
    id: '3',
    date: '2026-08-26',
    title: 'Update project dependencies',
    description: 'Check and update outdated npm packages',
    priority: 'low',
  },

  {
    id: '4',
    date: '2026-08-27',
    title: 'Fix authentication issue',
    description: 'Resolve the login and token refresh issue',
    priority: 'high',
  },
  {
    id: '5',
    date: '2026-08-27',
    title: 'Design settings screen',
    description: 'Create the UI for application settings',
    priority: 'medium',
  },

  {
    id: '6',
    date: '2026-08-28',
    title: 'Implement dark mode',
    description: 'Add dark and light theme support',
    priority: 'high',
  },
  {
    id: '7',
    date: '2026-08-28',
    title: 'Update app icons',
    description: 'Replace the old application icons',
    priority: 'low',
  },

  {
    id: '8',
    date: '2026-08-29',
    title: 'Test push notifications',
    description: 'Verify notification delivery on Android and iOS',
    priority: 'medium',
  },

  {
    id: '9',
    date: '2026-08-30',
    title: 'Optimize home screen',
    description: 'Improve rendering performance and scrolling',
    priority: 'high',
  },
  {
    id: '10',
    date: '2026-08-30',
    title: 'Clean unused components',
    description: 'Remove unused components and styles',
    priority: 'low',
  },

  {
    id: '11',
    date: '2026-08-31',
    title: 'Review pull requests',
    description: 'Review open pull requests from the team',
    priority: 'medium',
  },

  {
    id: '12',
    date: '2026-09-01',
    title: 'Prepare release build',
    description: 'Generate and test the production release build',
    priority: 'high',
  },
  {
    id: '13',
    date: '2026-09-01',
    title: 'Update changelog',
    description: 'Add the latest changes to the release notes',
    priority: 'low',
  },

  {
    id: '14',
    date: '2026-09-02',
    title: 'Check crash reports',
    description: 'Review recent crashes and investigate issues',
    priority: 'high',
  },

  {
    id: '15',
    date: '2026-09-03',
    title: 'Update onboarding flow',
    description: 'Improve the onboarding experience for new users',
    priority: 'medium',
  },
];

const TimeLineComponent = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(`${dateString}T00:00:00`);

    return {
      day: date.getDate(),
      weekday: date.toLocaleDateString('en-US', {
        weekday: 'short',
      }),
    };
  };
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({ item }) => {
        const { day, weekday } = formatDate(item.date);

        return (
          <View style={styles.row}>
            {/* DATE */}
            <View style={styles.dateContainer}>
              <Text style={styles.day}>{day}</Text>

              <Text style={styles.weekday}>{weekday}</Text>
            </View>

            {/* TASK */}
            <View style={styles.taskContainer}>
              <View
                style={[
                  styles.priority,
                  {
                    backgroundColor: badgeColors[item?.priority]?.text,
                  },
                ]}
              />

              <View style={styles.taskContent}>
                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default TimeLineComponent;
