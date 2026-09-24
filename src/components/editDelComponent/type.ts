export type EditOrDeleteBottomTabProps = {
  isSheetOpen?: boolean;
  setIsSheetOpen?: (value: boolean) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onMarkComplete?: () => void;
  onDeleteForever?: () => void;
  onRestore?: () => void;
  isCompletedOrNot?: boolean;
  isDraft?: boolean;
};
