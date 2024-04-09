import { GetMethodStoreGlobal } from '@/globals/stores/session';
import { useRouter } from '@/core/navigation';
import { HelperTime } from '@/globals/helpers';

export const useNavigateLoader = () => {
  const router = useRouter();
  const { setIsLoading } = GetMethodStoreGlobal();

  const navigateWithLoader = async (path: string, loadTimeout: number) => {
    setIsLoading(true);
    await HelperTime.WaitForMilliSecond(loadTimeout);
    router.push(path);
  };

  return navigateWithLoader;
};
