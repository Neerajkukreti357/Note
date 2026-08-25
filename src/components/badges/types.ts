type Priority =
  | 'high'
  | 'medium'
  | 'low'
  | 'complete'
  | 'pending'
  | 'partial complete';

export type BadgesProps = {
  title: Priority;
};
