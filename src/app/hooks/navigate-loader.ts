import { GetMethodStoreGlobal } from '@/globals/stores/session';
import { useRouter } from '@/core/navigation';
import { HelperTime } from '@/globals/helpers';

interface INavigateWithLoader {
  path: string;
  loadTimeout: number;
}

export const useNavigateLoader = () => {
  const router = useRouter();
  const { setIsLoading } = GetMethodStoreGlobal();

  const navigateWithLoader = async ({ path, loadTimeout }: INavigateWithLoader) => {
    setIsLoading(true);
    await HelperTime.WaitForMilliSecond(loadTimeout);
    router.push(path);
  };

  return navigateWithLoader;
};
