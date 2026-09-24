// toastConfig.ts

import CustomToast from '@/components/customToast';

export const toastConfig = {
  success: (props: any) => <CustomToast {...props} />,
  error: (props: any) => <CustomToast {...props} />,
  info: (props: any) => <CustomToast {...props} />,
};
