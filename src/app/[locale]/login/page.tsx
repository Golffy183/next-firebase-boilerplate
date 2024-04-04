'use client';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import React from 'react';
import { Card, CardHeader, CardBody, Divider, Input, Button } from '@nextui-org/react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { HelperI18N, HelperInit, HelperTime } from '@/globals/helpers';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { FirebaseLogin } from '@/app/utils/firebase';
import LanguageSwitcher from '@/app/components/language/language-swithcer';
import { ThemeSwitcher } from '@/app/components/theme/theme-swithcer';
import { useNavigateLoader } from '@/app/hooks/navigate-loader';

const schema = yup.object({
  username: yup.string().required('Form.validate.required').email('Form.validate.email'),
  password: yup
    .string()
    .required('Form.validate.required')
    .min(6, { key: 'Form.validate.min', option: { count: 6 } }),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: { username: '', password: '' },
  });

  const t = useTranslations();
  const navigateWithLoader = useNavigateLoader();

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    HelperInit.InitPage({
      menuUIIsShow: { isShowHeader: false, isShowFooter: false },
      loadTimeout: 1500,
    });
  }, []);

  const onSubmit = async (data: any) => {
    setIsSubmitLoading(true);
    await FirebaseLogin({
      username: data.username,
      password: data.password,
      setIsLoading: (isLoading: boolean) => {
        setIsSubmitLoading(isLoading);
      },
      setErrorMessage: (name: any, error: any) => {
        setError(name, error);
      },
    });
  };

  return (
    <main className="flex min-h-screen bg-gray-50 p-20 text-gray-900 items-center justify-center lg:p-24 dark:bg-gray-800 dark:text-gray-100">
      <Card className="max-w-[600px] sm:min-w-[400px] w-auto min-w-[300px]">
        <CardHeader className="flex space-x-1.5 justify-between">
          <div className="flex ml-2 mt-2 space-y-1 flex-col w-full justify-center text-left items-start">
            <p className="sm:text-lg">{t('Login.title')}</p>
            <p className="sm:text-base text-xs ml-2">{t('Login.description')}</p>
          </div>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </CardHeader>
        <Divider />
        <CardBody>
          <form
            className="flex flex-col w-full justify-center items-center gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              {...register('username')}
              isClearable
              size="md"
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={!!errors.username || !!errors.root}
              errorMessage={HelperI18N.MappingObject(errors.username?.message, t)}
              className="max-w-xs"
              style={{ fontSize: '0.75rem' }}
              placeholder={t('Form.placeholder.email')}
            />
            <Input
              {...register('password')}
              size="md"
              label="Password"
              variant="bordered"
              isInvalid={!!errors.password || !!errors.root}
              errorMessage={HelperI18N.MappingObject(errors.password?.message, t)}
              style={{ fontSize: '0.75rem' }}
              placeholder={t('Form.placeholder.password')}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  aria-label="Toggle password visibility"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <BsFillEyeSlashFill className="text-md text-default-400 pointer-events-none" />
                  ) : (
                    <BsFillEyeFill className="text-md text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              className="max-w-xs"
            />
            {errors.root && (
              <div className="mt-2 h-4 text-center text-xs text-red-500">
                {HelperI18N.MappingObject(errors.root.message, t)}
              </div>
            )}
            <div className="flex flex-row w-full items-center justify-center">
              <Button
                isDisabled={!isDirty || !isValid}
                isLoading={isSubmitLoading}
                size="md"
                aria-label="Submit"
                color="primary"
                type="submit"
                className="m-3"
              >
                {t('Form.submit')}
              </Button>
              <Button
                size="md"
                aria-label="Back"
                color="danger"
                className="m-3 text-black"
                onPress={async () => {
                  await HelperTime.WaitForMilliSecond(300);
                  await navigateWithLoader('/', 1500);
                }}
              >
                {t('Form.back')}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </main>
  );
}
